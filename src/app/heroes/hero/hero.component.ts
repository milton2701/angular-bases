import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'IronMan'
  public age: number = 41

  get nombreCapitalizado():string{
    return this.name.toUpperCase()
  }
  obtenerDescripcionHeroe():string{
return `${this.name} - ${this.age}`
  }

  cambiarNombre(name:string) :void{
    this.name = name
  }
  cambiarEdad(edad:number):void{
    this.age = edad
  }
  cambiarApodo():void{
    throw 'Metodo aun no implementado'
  }
  resetForm():void{
    this.name = 'IronMan'
    this.age = 41
  }


}
