import { ChatService, Message } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

messages: Observable<Message[]>;
formValue: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
// appends to array after each new msg is added tofeedsource
this.messages = this.chat.conversation.asObservable()
.scan((acc, val) => acc.concat(val) );


}

sendMessage() {
  this.chat.converse(this.formValue);
  this.formValue = ' ';
}

}
