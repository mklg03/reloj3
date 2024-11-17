import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraDiaComponent } from './hora-dia.component';

describe('HoraDiaComponent', () => {
  let component: HoraDiaComponent;
  let fixture: ComponentFixture<HoraDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoraDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoraDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
