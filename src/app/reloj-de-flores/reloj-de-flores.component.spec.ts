import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojDeFloresComponent } from './reloj-de-flores.component';

describe('RelojDeFloresComponent', () => {
  let component: RelojDeFloresComponent;
  let fixture: ComponentFixture<RelojDeFloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojDeFloresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojDeFloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
