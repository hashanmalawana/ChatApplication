import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { ApiAiClient } from 'api-ai-javascript';

@Injectable()

export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }

  talk() {
    this.client.textRequest('Who are you!')
    .then(res => console.log(res) );
  }
}
