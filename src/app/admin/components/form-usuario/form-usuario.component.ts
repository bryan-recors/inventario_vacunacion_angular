import { Component, OnInit } from '@angular/core';
//importar angular forms
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
//importo el servicio
import { EmpleadosService } from 'src/app/core/services/empleados/empleados.service';
//llamoal router
import { Router } from '@angular/router';
//validaicon cedula
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

   form = new FormGroup({})

  constructor(
    private formBuilder:FormBuilder,
    private empleadosService:EmpleadosService,
    private router:Router
  ) { 
    this.builForm();
  }

  ngOnInit(): void {
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
      this.empleadosService.createEmpleado(empleado).subscribe((newEmpleado)=>{
        console.log(newEmpleado);
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
