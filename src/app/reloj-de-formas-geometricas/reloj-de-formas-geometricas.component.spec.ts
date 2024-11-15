import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojDeFormasGeometricasComponent } from './reloj-de-formas-geometricas.component';

describe('RelojDeFormasGeometricasComponent', () => {
  let component: RelojDeFormasGeometricasComponent;
  let fixture: ComponentFixture<RelojDeFormasGeometricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojDeFormasGeometricasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojDeFormasGeometricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
