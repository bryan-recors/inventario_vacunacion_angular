import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//vistas anidadas
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full',
      },
      {
        path: 'home',
        loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'empleados',
    loadChildren:() => import('./empleados/empleados.module').then(m => m.EmpleadosModule)
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full',
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
