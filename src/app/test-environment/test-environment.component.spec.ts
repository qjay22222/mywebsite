import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEnvironmentComponent } from './test-environment.component';

describe('TestEnvironmentComponent', () => {
  let component: TestEnvironmentComponent;
  let fixture: ComponentFixture<TestEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
