import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { EmpleadosService } from 'src/app/core/services/empleados/empleados.service';
import { Empleado } from 'src/app/models/empleados.models.';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  empleados:any=[];
  id:string='';
  isAdmin:boolean=false;
  form = new FormGroup({})
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private empleadosService:EmpleadosService
  ) {
    this.builForm();
   }

  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  login(event:Event){
    if(this.form.valid){
      if(this.form.valid){
        const empleado = this.form.value;
        this.empleadosService.loginUsuario(empleado).subscribe((datosUsuario)=>{
          //console.log(datosUsuario);
          this.empleados = datosUsuario;
          this.id = this.empleados.user.id;
           //console.log(this.id);
          this.router.navigate([`home/edit/${this.id}`]);
        })
      }

    }
  }

  get usernameField(){
    return this.form.get('username');
  }
  get passwordField(){
    return this.form.get('password');
  }

}
