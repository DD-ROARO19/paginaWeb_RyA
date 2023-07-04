import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbogadosExperienciaComponent } from './abogados-experiencia.component';

describe('AbogadosExperienciaComponent', () => {
  let component: AbogadosExperienciaComponent;
  let fixture: ComponentFixture<AbogadosExperienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbogadosExperienciaComponent]
    });
    fixture = TestBed.createComponent(AbogadosExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
