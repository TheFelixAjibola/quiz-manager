import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateDtoQuiz } from './dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizServices: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizServices.findAll();
  }

  @Get(':id')
  getQuiz(@Param('id') id: string) {
    return this.quizServices.findOne(+id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createQuiz(@Body() createDtoQuiz: CreateDtoQuiz) {
    return this.quizServices.createQuiz(createDtoQuiz);
  }
}
