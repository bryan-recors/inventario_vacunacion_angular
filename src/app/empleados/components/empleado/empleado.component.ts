import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/core/services/empleados/empleados.service';
import { Empleado } from './../../../models/empleados.models.';
//inyector de dependencias 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})

export class EmpleadoComponent implements OnInit {

  empleados:Empleado[]=[];

  constructor(private route:ActivatedRoute,
    private empleadosService:EmpleadosService
    ) { }

  ngOnInit(): void {
    this.fetchEmpleados();
  }

  fetchEmpleados(){
    this.empleadosService.getAllEmpleados().subscribe(empleados =>{
      this.empleados = empleados;
    });
  }


}
