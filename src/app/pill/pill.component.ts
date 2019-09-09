import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {

  constructor() { }

  @Input() type: string = 'primary';

  ngOnInit() {

    console.log('PILL TYPE', this.type)
  }

}
