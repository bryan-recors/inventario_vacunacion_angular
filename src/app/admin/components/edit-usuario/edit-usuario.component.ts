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
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

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
          email:empleado.email
        });
      });
    });
  }

  private builForm(){
    this.form = this.formBuilder.group({
      cedula:['',[Validators.required, MyValidators.validacionCedula,Validators.pattern('[0-9]+$')]],
      nombres:['',[Validators.required, Validators.pattern('[a-zA-Z ]+$')]],
      apellidos:['',[Validators.required,Validators.pattern('[a-zA-Z ]+$')]],
      email:['',[Validators.required,Validators.email]]
    });
  }

  saveEmpleado(event:Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const empleado = this.form.value;
      this.empleadosService.updateEmpleado(this.id,empleado).subscribe((newEmpleado)=>{
        //console.log(newEmpleado);
        this.router.navigate(['./admin/lista']);
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

}
