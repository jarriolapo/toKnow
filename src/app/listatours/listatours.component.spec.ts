import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatoursComponent } from './listatours.component';

describe('ListatoursComponent', () => {
  let component: ListatoursComponent;
  let fixture: ComponentFixture<ListatoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
