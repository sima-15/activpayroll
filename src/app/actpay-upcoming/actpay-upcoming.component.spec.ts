import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActpayUpcomingComponent } from './actpay-upcoming.component';

describe('ActpayUpcomingComponent', () => {
  let component: ActpayUpcomingComponent;
  let fixture: ComponentFixture<ActpayUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActpayUpcomingComponent]
    });
    fixture = TestBed.createComponent(ActpayUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
