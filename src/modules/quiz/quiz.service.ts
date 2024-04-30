import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  findAll() {
    return this.quizRepository.find();
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
