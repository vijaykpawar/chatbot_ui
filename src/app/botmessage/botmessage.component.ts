import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-botmessage',
  templateUrl: './botmessage.component.html',
  styleUrls: ['./botmessage.component.scss']
})
export class BotmessageComponent implements OnInit  {

  @Input() message: string = 'Hello'

  

  constructor() { }

  ratingClicked(){

  }


  ngOnInit() {
  }

}
