import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = "http://localhost:8080/api/empleados";  // Cambia esto según tu API

  constructor(private httpClient: HttpClient) {
    console.log('EmpleadoService instanciado');
  }

  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }

  registrarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(`${this.baseUrl}`, empleado); // Cambié Object por Empleado
  }

  actualizar(id: number, empleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(`${this.baseUrl}/${id}`, empleado); // Cambié Object por Empleado
  }

  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`);
  }

  eliminarEmpleado(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`); // Cambié Object por void
  }
}
