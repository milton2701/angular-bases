import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Batman', 'Hulk', 'Ironman', 'AntMan']
  public heroeEliminado?:string
  eliminarUltimoHeroe():void{
    this.heroeEliminado = this.heroes.pop()
  }
}
