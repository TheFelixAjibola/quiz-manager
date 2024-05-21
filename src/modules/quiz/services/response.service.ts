import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ResponseAddEvent } from '../events/response-add.event';

@Injectable()
export class ResponseService {
  @OnEvent('response.submitted')
  handleIfResponseIsCorrect(payload: ResponseAddEvent) {
    console.log('handleIfResponseIsCorrect', payload);
  }
}
