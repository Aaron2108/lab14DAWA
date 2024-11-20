import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService: EmpleadoService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empleadoService.obtenerEmpleadoPorId(this.id).pipe(
      tap(dato => {
        this.empleado =dato;
      }), 
      catchError(error => {
        console.log(error);
      
        return of(null);
      })
    ).subscribe();


  }

}
