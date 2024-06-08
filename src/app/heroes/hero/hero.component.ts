import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string = "Ryan";
  public edad:number = 23;
  public ciudad:string = "Ica";

  get nombreciudad():string{
    return this.ciudad.toUpperCase();
  }

  getdescripcion():string{
    return `${this.ciudad} - ${this.nombre}`
  }

  cambiarnombre():void{
    this.nombre='Wantuil'
  }

  cambiaredad():void{
    this.edad=42
  }

  resetearnombre():void{
    this.nombre= 'Ryan';
  }
  resetearedad():void{
    this.edad= 23;
  }


}
