# InventarioVacunacion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##Como Utilizar
Usuarios que se peuden utilizar para probar 

Usuario Administrador si se usan estas credenciales podra crear /editar/eliminar/listar /empleados  con los campos solicitados
username:bryansandoval
passwrd: basi1724

Nota el usuario administrador puede crear nuevos usuarios  el username se autogenera uniendo el nombre y el apellido
su contraseña tambien se autogenera copiando el numero de cedula registrado

Usuario empleado  si se usa este usuario se puede ir a  actualizar y completar el formulario con los datos de vacunacion del empleado
username:stalinsandoval
password: basi1724

## Descripcion del desarrollo 
el proyecto esta modularizado  cree modulos  material que importa todo lo que se usa para dar estilos con  Material DEsign 
EL modulo home contiene  el inicio de secion que evalua si el usuario ingresado es administrador le dirige a l modulo de administracion donde este usuario podra crear, editar , listar o eliminar un usuario Empleado.
si el usuario que se logeo no es un administrador le redirigo a la pagina donde este usuario podra completar su registro con los campos adicionales referentes a la vacunacion
el modulo shared contiene los elementos que se compartiran atraves de las paginas como el header
el modulo Core contiene el servicio que se comsume para realizar las peticiones Http  con el fin de  consumir la api rest ,
la carpeta utils contiene el archivo donde esta una validacion personalizada,
la carpeta model contiene una referencia a los datos que se obtendran a traves de  los servicios


## Code scaffolding 


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

