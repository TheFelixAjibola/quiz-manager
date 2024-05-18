import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { OptionController } from './controllers/option.controller';
import { Option } from './entities/option.entity';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option]), UserModule],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
