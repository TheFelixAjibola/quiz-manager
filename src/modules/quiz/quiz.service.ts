import { Injectable } from '@nestjs/common';
import { CreateDtoQuiz } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  findAll() {
    return [1];
  }

  findOne(id: number) {
    return { id };
  }

  createQuiz(createDtoQuiz: CreateDtoQuiz) {
    return { ...createDtoQuiz, id: Date.now() };
  }
}
