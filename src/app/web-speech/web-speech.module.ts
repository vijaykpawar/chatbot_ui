import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { SpeechRecognizerService } from './shared/services/speech-recognizer.service';
import { SpeechSynthesizerService } from './shared/services/speech-synthesizer.service';
import { WebSpeechComponent } from './web-speech.component';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { ChatinputComponent } from '../chatinput/chatinput.component';
import { BotmessageComponent } from '../botmessage/botmessage.component';
import { MessageComponent } from '../message/message.component';
import { PillComponent } from '../pill/pill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    WebSpeechComponent,
    ChatboxComponent,
    ChatinputComponent,
    BotmessageComponent,
    MessageComponent,
    PillComponent
  ],
  providers: [
    SpeechRecognizerService,
    SpeechSynthesizerService
  ]
})
export class WebSpeechModule { }
