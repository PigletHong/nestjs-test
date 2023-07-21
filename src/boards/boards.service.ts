import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid} from 'uuid';
import { BoardRequestDto } from './DTO/boardRequestDto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards; 
    }

    createBoard(boardRequestDto: BoardRequestDto) {
        const board: Board = {
            id: uuid(),
            title: boardRequestDto.title,
            description: boardRequestDto.description,
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }

    getBoardById(id: String): Board {
        const found = this.boards.find(board => board.id === id);

        if(!found) {
            throw new NotFoundException(id + '와 일치하는 id값이 없습니다.');
        }

        return found;
    }

    deleteBoard(id: String): void {
        const found = this.getBoardById(id);

        if(!found) {
            throw new NotFoundException(id + '와 일치하는 id값이 없습니다.');
        }

        this.boards = this.boards.filter((board) => board.id !== found.id);
    }

    updateBoard(id: String, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
