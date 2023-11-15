import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMedicosComponent } from './cadastro-medicos.component';

describe('CadastroMedicosComponent', () => {
  let component: CadastroMedicosComponent;
  let fixture: ComponentFixture<CadastroMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroMedicosComponent]
    });
    fixture = TestBed.createComponent(CadastroMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
