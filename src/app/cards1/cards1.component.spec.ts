import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards1Component } from './cards1.component';

describe('CardsComponent', () => {
  let component: Cards1Component;
  let fixture: ComponentFixture<Cards1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cards1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cards1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});