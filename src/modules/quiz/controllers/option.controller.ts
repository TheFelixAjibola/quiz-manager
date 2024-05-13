import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from '../dtos/create-option.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Question')
@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOption.questionId,
    );
    const option = await this.optionService.createOption(
      createOption,
      question,
    );
    return { question, createOption, option };
  }
}
