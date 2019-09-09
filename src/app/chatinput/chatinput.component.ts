import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatinput',
  templateUrl: './chatinput.component.html',
  styleUrls: ['./chatinput.component.scss']
})
export class ChatinputComponent implements OnInit {

  constructor() { }
  userValue=''

  @Output() onChange = new EventEmitter();

  ngOnInit() {
  }
  
  handleSubmit(event) {
    this.onChange.emit(this.userValue);
    this.userValue = '';
  }

}
