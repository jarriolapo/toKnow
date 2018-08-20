import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroguiaComponent } from './registroguia.component';

describe('RegistroguiaComponent', () => {
  let component: RegistroguiaComponent;
  let fixture: ComponentFixture<RegistroguiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroguiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
