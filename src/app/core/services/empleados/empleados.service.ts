import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Empleado } from 'src/app/models/empleados.models.';
import { environment } from 'src/environments/environment';
import { LoginEmpleado } from 'src/app/models/login.models';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http:HttpClient
  ) { }

  private getHeaders() {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return { headers: httpHeaders };
  }

  getAllEmpleados(){ //metodo que me devuelve todos los productos
    return this.http.get<Empleado[]>(`${environment.url_api}/usuarios/`);
  }

  //metodo que busque un id
  getEmpleado(id:String){
    //funcion find que recibe una arrayfuncion que si coincide con el id con el item.id ese devuelve
    return this.http.get<Empleado>(`${environment.url_api}/usuarios/${id}`);
  }

  createEmpleado(empleado: Empleado){
    return this.http.post((`${environment.url_api}/usuarios/`),empleado);
  }

  updateEmpleado(id:string, changes: Partial<Empleado>){
    return this.http.put(`${environment.url_api}/usuarios/${id}`,changes);
  }

  deleteEmpleado(id:string){
    return this.http.delete(`${environment.url_api}/usuarios/${id}`);
  }
 
  loginUsuario(empleado: LoginEmpleado){
    return this.http.post<Empleado>((`${environment.url_api}/usuario/login/`),empleado);
  }
  


}

