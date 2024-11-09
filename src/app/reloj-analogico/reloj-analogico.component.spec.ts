import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojAnalogicoComponent } from './reloj-analogico.component';

describe('RelojAnalogicoComponent', () => {
  let component: RelojAnalogicoComponent;
  let fixture: ComponentFixture<RelojAnalogicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojAnalogicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojAnalogicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
