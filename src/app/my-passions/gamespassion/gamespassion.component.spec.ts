import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamespassionComponent } from './gamespassion.component';

describe('GamespassionComponent', () => {
  let component: GamespassionComponent;
  let fixture: ComponentFixture<GamespassionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamespassionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamespassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
