import { Component, OnInit } from '@angular/core';
//servicio
import {EmpleadosService} from './../../../core/services/empleados/empleados.service';
import { Empleado } from './../../../models/empleados.models.';
//importo un injector de dependencias
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  empleados:Empleado[]=[];
  filterEmpleados = '';
  constructor(
    private route: ActivatedRoute,
    private empleadosService:EmpleadosService
  ) { }

  ngOnInit(): void {
    this.fetchEmpleados();
  }
  
  fetchEmpleados(){
    this.empleadosService.getAllEmpleados().subscribe(empleados => {
      this.empleados = empleados;
    });
  }

  clickProduct(id: number){
    console.log('empleado')
    console.log(id);

  }

}
