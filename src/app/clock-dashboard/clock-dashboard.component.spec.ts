import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDashboardComponent } from './clock-dashboard.component';

describe('ClockDashboardComponent', () => {
  let component: ClockDashboardComponent;
  let fixture: ComponentFixture<ClockDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
