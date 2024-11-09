import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojDeCubosComponent } from './reloj-de-cubos.component';

describe('RelojDeCubosComponent', () => {
  let component: RelojDeCubosComponent;
  let fixture: ComponentFixture<RelojDeCubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojDeCubosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojDeCubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
