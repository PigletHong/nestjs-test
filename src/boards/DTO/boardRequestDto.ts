import { IsNotEmpty } from "class-validator";

export class BoardRequestDto {
    @IsNotEmpty()
    title: String;

    @IsNotEmpty()
    description: String;
}