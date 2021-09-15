import { Component, OnInit } from '@angular/core';
//servicio
import {EmpleadosService} from './../../../core/services/empleados/empleados.service';
import { Empleado } from './../../../models/empleados.models.';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {

  empleados:Empleado[]=[];
  displayedColumns: String[] = ['id','cedula','nombres','apellidos','correo','actions'];
  constructor(
    private empleadosService:EmpleadosService
  ) { }

  ngOnInit(): void {
    this.fetchEmpleados();
  }

  fetchEmpleados(){
    this.empleadosService.getAllEmpleados().subscribe(empleados => {
      this.empleados = empleados;
    })
  }

  deleteEmpleados(id:string){
    this.empleadosService.deleteEmpleado(id).subscribe(rta =>{
      console.log(rta); //respuesta
      this.fetchEmpleados(); //actualizo 
    })
  }

}
