import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-botmessage',
  templateUrl: './botmessage.component.html',
  styleUrls: ['./botmessage.component.scss']
})
export class BotmessageComponent implements OnInit , OnChanges {

  @Input() message: string = 'Hello'

  @Input() msg: string;

  constructor() { }

  ratingClicked(){

  }

  ngOnChanges(): void {
    console.log("msg from parent ::"+this.msg);
  }

  ngOnInit() {
  }

}
