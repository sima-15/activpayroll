import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionSchedulerComponent } from './syncfusion-scheduler.component';

describe('SyncfusionSchedulerComponent', () => {
  let component: SyncfusionSchedulerComponent;
  let fixture: ComponentFixture<SyncfusionSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyncfusionSchedulerComponent]
    });
    fixture = TestBed.createComponent(SyncfusionSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
