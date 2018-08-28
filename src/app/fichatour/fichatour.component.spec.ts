import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichatourComponent } from './fichatour.component';

describe('FichatourComponent', () => {
  let component: FichatourComponent;
  let fixture: ComponentFixture<FichatourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichatourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichatourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
