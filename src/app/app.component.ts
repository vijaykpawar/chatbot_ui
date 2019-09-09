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
    this.openChatBox = !this.openChatBox;
  }
}
