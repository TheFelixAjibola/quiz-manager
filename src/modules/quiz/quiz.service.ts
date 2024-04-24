import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDtoQuiz } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  private quiz = [
    { id: 1, name: 'Shuffleboard' },
    { id: 2, name: 'Archery' },
  ];

  findAll(/*name?: 'Shuffleboard' | 'Archery'*/) {
    // if (name) {
    //   return this.quiz.filter((quiz) => quiz.name === name);
    // }
    return this.quiz;
  }

  findOne(id: number) {
    const findQuiz = this.quiz.find((quiz) => quiz.id === id);
    if (!findQuiz) {
      throw new NotFoundException('Not Found');
    }
    return findQuiz;
  }

  createQuiz(createDtoQuiz: CreateDtoQuiz) {
    return { ...createDtoQuiz, id: Date.now() };
  }
}
