import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEmpleadoComponent } from './atualizar-empleado.component';

describe('AtualizarEmpleadoComponent', () => {
  let component: AtualizarEmpleadoComponent;
  let fixture: ComponentFixture<AtualizarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
