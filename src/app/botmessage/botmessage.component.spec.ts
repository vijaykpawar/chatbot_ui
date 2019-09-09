import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotmessageComponent } from './botmessage.component';

describe('BotmessageComponent', () => {
  let component: BotmessageComponent;
  let fixture: ComponentFixture<BotmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
