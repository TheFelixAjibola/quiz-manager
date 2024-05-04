import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controller/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { OptionController } from './controller/option.controller';
import { Option } from './entities/option.entity';
import { OptionService } from './services/option.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
