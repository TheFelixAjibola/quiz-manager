import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controller/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
