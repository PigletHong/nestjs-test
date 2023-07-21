import { Injectable } from '@nestjs/common';
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
        return this.boards.find((board) => board.id === id);
    }
}
