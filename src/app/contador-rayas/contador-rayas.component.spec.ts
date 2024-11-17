import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorRayasComponent } from './contador-rayas.component';

describe('ContadorRayasComponent', () => {
  let component: ContadorRayasComponent;
  let fixture: ComponentFixture<ContadorRayasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorRayasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorRayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
