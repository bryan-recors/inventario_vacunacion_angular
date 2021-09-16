import { Component, OnInit } from '@angular/core';
//importar angular forms
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
//importo el servicio
import { EmpleadosService } from 'src/app/core/services/empleados/empleados.service';
//llamoal router //obtener id //tipar parametros
import { Router, ActivatedRoute, Params } from '@angular/router';
//validaicon cedula
import { MyValidators } from 'src/app/utils/validators';
import { Empleado } from 'src/app/models/empleados.models.';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.scss']
})
export class UpdateEmpleadoComponent implements OnInit {

  minDate = new Date(2019,3,10);
  //si quiero una fecha maxima
  //maxDate = new Date(2021,11,10)
  form = new FormGroup({})
  id:string='';
  constructor(
    private formBuilder:FormBuilder,
    private empleadosService:EmpleadosService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ) { 
    this.builForm();
  }

  ngOnInit(): void {
    //obtener datos del empleado con id 
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id = params.id;
      this.empleadosService.getEmpleado(this.id).subscribe(empleado =>{
        //rellenar el formulario
        this.form.patchValue({
          cedula:empleado.cedula,
          nombres:empleado.nombres,
          apellidos:empleado.apellidos,
          email:empleado.email,
          fecha_nacimiento:empleado.fecha_nacimiento,
          direccion:empleado.direccion,
          telefono_movil:empleado.telefono_movil,
          estado_vacunacion:empleado.estado_vacunacion,
          tipo_vacuna:empleado.tipo_vacuna,
          fecha_vacuna:empleado.fecha_vacuna,
          numero_dosis:empleado.numero_dosis
        });
      });
    });
  }

  private builForm(){
    this.form = this.formBuilder.group({
      cedula:['',[Validators.required, MyValidators.validacionCedula,Validators.pattern('[0-9]+$')]],
      nombres:['',[Validators.required, Validators.pattern('[a-zA-Z ]+$')]],
      apellidos:['',[Validators.required,Validators.pattern('[a-zA-Z ]+$')]],
      email:['',[Validators.required,Validators.email]],
      fecha_nacimiento:[''],
      direccion:[''],
      telefono_movil:['',[Validators.pattern('[0-3]{0,10}')]],
      estado_vacunacion:[''],
      tipo_vacuna:[''],
      fecha_vacuna:[''],
      numero_dosis:['',[Validators.pattern('[0-3]+$')]]

    });
  }

  saveEmpleado(event:Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const empleado = this.form.value;
      this.empleadosService.updateEmpleado(this.id,empleado).subscribe((newEmpleado)=>{
        //console.log(newEmpleado);
        //this.router.navigate(['./admin/lista']);
      })
    }
  }

  get cedulaField(){
    return this.form.get('cedula');
  }

  get emailField(){
    return this.form.get('email');
  }

  get nombresField(){
    return this.form.get('nombres');
  }
  get apellidosField(){
    return this.form.get('apellidos');
  }
 //****** nuevos campos***********
  get nacimientoField(){
    return this.form.get('fecha_nacimiento');
  }
  get direccionField(){
    return this.form.get('direccion');
  }
  get movilField(){
    return this.form.get('telefono_movil');
  }
  get estadoVacunacionField(){
    return this.form.get('estado_vacunacion');
  }
  get tipoVacunaField(){
    return this.form.get('tipo_vacuna');
  }
  get fechaVacunaField(){
    return this.form.get('fecha_vacuna');
  }
  get numeroDosisField(){
    return this.form.get('numero_dosis');
  }


}
