import { Component, OnInit } from '@angular/core';
import {
  Input,
  Output,
  EventEmitter} 
  from '@angular/core'; // decorador que indica que este sera un componente. Input, ouput
// el decorador se define antes de construir la clase
import { Empleado } from 'src/app/models/empleados.models.';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  @Input()
  empleado!: Empleado; // ahora recibira una propiedad desde otro componente 
 // ahora recibira una propiedad desde otro componente 
  @Output() productClicked:EventEmitter<any> = new EventEmitter(); //creo un evento productClicked 
  
  constructor(
    
  ) { }

  ngOnInit(): void {
   
  }



}
