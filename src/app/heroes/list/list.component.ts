import { Component, Host } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nombres_de_heroes:string [] = ['DARKWILLOW','ANTMAN','HULK','SANDKING','WIND RANGER'];
  public heroeEliminado?:string ='';

  eliminarUltimoHeroe():void{
    this.heroeEliminado = this.nombres_de_heroes.pop();

  }

}
