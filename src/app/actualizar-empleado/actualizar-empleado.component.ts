import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, of } from 'rxjs';

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,  // Componente standalone
  templateUrl: './actualizar-empleado.component.html',
  imports: [FormsModule, CommonModule],  // Aquí debe estar CommonModule
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  id: number;
  empleado: Empleado = new Empleado();

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.empleadoService.obtenerEmpleadoPorId(this.id).pipe(
        tap(dato => {
          if (dato) {
            this.empleado = dato;
          } else {
            console.log('Empleado no encontrado');
          }
        }),
        catchError(error => {
          console.error('Error al obtener el empleado:', error);
          return of(null);
        })
      ).subscribe();
    } else {
      console.error('ID no válido');
    }
  }

  onSubmit(): void {
    console.log('Formulario enviado', this.empleado);
    this.empleadoService.actualizarEmpleado(this.empleado.id, this.empleado).subscribe({
      next: (data) => {
        console.log('Empleado actualizado:', data);
        this.router.navigate(['/empleados']); // Redirigir a la lista de empleados
      },
      error: (err) => {
        console.error('Error al actualizar el empleado', err);
      }
    });
  }  
}
