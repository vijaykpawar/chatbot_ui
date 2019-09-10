import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chatinput',
  templateUrl: './chatinput.component.html',
  styleUrls: ['./chatinput.component.scss']
})
export class ChatinputComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  @Output() click = new EventEmitter();


  @Input() finalTranscript: string = '';
  

  constructor() { }
  userValue='';
  //finalTranscript='';
  childVaue = this.finalTranscript;

  

  

  ngOnInit() {  
    console.log('Inside chat input =', this.finalTranscript);
  }
  
  handleSubmit(event) {
    if (this.finalTranscript) {
      console.log('Emiiting voice value')
      this.click.emit(this.finalTranscript);
      this.finalTranscript = '';
    }
    else {
      this.onChange.emit(this.userValue);
      this.userValue = '';
    }

  }

  onClickMat(finalTranscript) {
    this.finalTranscript =  finalTranscript;
    
  }

}
