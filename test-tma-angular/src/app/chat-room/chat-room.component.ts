import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../services/messages.service';
import {AuthService} from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  newMessage: string;
  currentUser;
  channelList = [];
  messages = [];

  constructor(  private _messageService: MessagesService,
                private authService: AuthService,
                private router: Router ,
                private usersService: UsersService ) { }

  ngOnInit(): void {
    this. getAllMessages();
    this.usersService.getAll().subscribe( res => {
      this.channelList = res;
    });
  }

  sendMessage(): void {
    console.log('sendMessage', this.newMessage);
    this._messageService.sendOneMessage(this.newMessage).subscribe(res => {
      console.log('sendMessage', res);
      this.currentUser = res;
     console.log(this.currentUser?.user.uid);
    });
    this.newMessage = '';
  }

  getAllMessages(): void {
    this._messageService.getAllMessages().subscribe(res => {
      console.log('this.messages', res);
      this.messages = res;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
