import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsHistoryComponent } from './hands-history.component';

describe('HandsHistoryComponent', () => {
  let component: HandsHistoryComponent;
  let fixture: ComponentFixture<HandsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
