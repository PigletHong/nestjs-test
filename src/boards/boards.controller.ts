import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { BoardRequestDto } from './DTO/boardRequestDto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(@Body() boardRequestDto: BoardRequestDto): Board {
        return this.boardsService.createBoard(boardRequestDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: String): Board {
        return this.boardsService.getBoardById(id);
    }

}
