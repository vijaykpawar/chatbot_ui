import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-chat-box';
  openChatBox:boolean = false;

  toggleChatBox(event) {
    console.log('I am clicked')
    this.openChatBox = !this.openChatBox;
  }
}
