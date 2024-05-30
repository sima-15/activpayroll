import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarKanbanViewComponent } from './calendar-kanban-view.component';

describe('CalendarKanbanViewComponent', () => {
  let component: CalendarKanbanViewComponent;
  let fixture: ComponentFixture<CalendarKanbanViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarKanbanViewComponent]
    });
    fixture = TestBed.createComponent(CalendarKanbanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
