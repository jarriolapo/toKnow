import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroturistaComponent } from './registroturista.component';

describe('RegistroturistaComponent', () => {
  let component: RegistroturistaComponent;
  let fixture: ComponentFixture<RegistroturistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroturistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroturistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
