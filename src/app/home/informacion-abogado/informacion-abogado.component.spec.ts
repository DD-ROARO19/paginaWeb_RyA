import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAbogadoComponent } from './informacion-abogado.component';

describe('InformacionAbogadoComponent', () => {
  let component: InformacionAbogadoComponent;
  let fixture: ComponentFixture<InformacionAbogadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionAbogadoComponent]
    });
    fixture = TestBed.createComponent(InformacionAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
