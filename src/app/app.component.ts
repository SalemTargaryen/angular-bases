import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
  public valor_contador:number = 0

  //METODO
  // "nombre" + "()"+":"+"void/otro valor"+ "{}"
  incrementar():void {
    this.valor_contador = this.valor_contador+1;
  }

  resetear():void{
    this.valor_contador =0;
  }

  reducir():void {
    if (this.valor_contador >0){
    this.valor_contador = this.valor_contador-1;}

  }


}
