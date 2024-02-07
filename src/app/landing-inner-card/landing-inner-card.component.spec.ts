import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInnerCardComponent } from './landing-inner-card.component';

describe('LandingInnerCardComponent', () => {
  let component: LandingInnerCardComponent;
  let fixture: ComponentFixture<LandingInnerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingInnerCardComponent]
    });
    fixture = TestBed.createComponent(LandingInnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
