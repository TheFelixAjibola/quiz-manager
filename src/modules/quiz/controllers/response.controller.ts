import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { events } from 'src/common/constants/event.constants';
import { ResponseAddEvent } from '../events/response-add.event';

@Controller('/response')
@ApiTags('Response')
export class ResponseController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Post()
  async handleQuestionResponse() {
    console.log('This is inside the controller');

    const payload = new ResponseAddEvent();
    payload.userId = 1;
    payload.optionId = 33;

    this.eventEmitter.emit(events.RESPONSE_SUBMITTED, payload);
    return { message: 'Response Taken' };
  }
}
