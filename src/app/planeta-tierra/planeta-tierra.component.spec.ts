import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaTierraComponent } from './planeta-tierra.component';

describe('PlanetaTierraComponent', () => {
  let component: PlanetaTierraComponent;
  let fixture: ComponentFixture<PlanetaTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaTierraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetaTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
