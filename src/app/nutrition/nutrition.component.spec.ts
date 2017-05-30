import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutrition } from './nutrition.component';

describe('Nutrition', () => {
  let component: Nutrition;
  let fixture: ComponentFixture<Nutrition>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutrition ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutrition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
