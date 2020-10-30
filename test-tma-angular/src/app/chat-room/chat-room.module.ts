import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomComponent } from './chat-room.component';


@NgModule({
  declarations: [ChatRoomComponent],
  imports: [
    CommonModule,
    ChatRoomRoutingModule,
    FormsModule
  ]
})
export class ChatRoomModule { }
