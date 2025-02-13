import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainComponent{
  constructor(private dbzService: DbzService){

  }
  get personajes():Character[]{
    return [...this.dbzService.personajes]
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteById(id)
  }
  onNewCharacter(personaje:Character):void{
    this.dbzService.addCharacter(personaje)
  }
}
