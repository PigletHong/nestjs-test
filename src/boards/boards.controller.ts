import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { BoardRequestDto } from './DTO/boardRequestDto';
import { BoardStatusValidaionPipe } from './Pipes/boardStatusValidaionPipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() boardRequestDto: BoardRequestDto): Board {
        return this.boardsService.createBoard(boardRequestDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: String): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    @UsePipes(ValidationPipe)
    deleteBoard(@Param('id') id: String): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoard(@Param('id') id: String,
                @Body('status', BoardStatusValidaionPipe) status: BoardStatus) {
        return this.boardsService.updateBoard(id, status);
    }
}
