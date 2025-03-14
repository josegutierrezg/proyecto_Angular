import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from './personaje.component';

describe('PersonajeComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
