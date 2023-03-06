import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetLayoutComponent } from './pet-layout.component';

describe('PetLayoutComponent', () => {
  let component: PetLayoutComponent;
  let fixture: ComponentFixture<PetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
