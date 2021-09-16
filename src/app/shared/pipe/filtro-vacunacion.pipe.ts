import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroVacunacion'
})
export class FiltroVacunacionPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    if (arg == '' || arg.length < 2) return value;
      const resultado = [];
      for (const post of value){
        
        if (post.tipo_vacuna.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          console.log('empleados encontrado');
          resultado.push(post);
        };
      };
    return resultado;
  }
}

