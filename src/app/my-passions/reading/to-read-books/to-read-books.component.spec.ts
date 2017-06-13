import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToReadBooksComponent } from './to-read-books.component';

describe('ToReadBooksComponent', () => {
  let component: ToReadBooksComponent;
  let fixture: ComponentFixture<ToReadBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToReadBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToReadBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
