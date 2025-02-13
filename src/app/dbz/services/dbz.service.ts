import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbzService {
  public personajes:Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1300,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id:uuid(),
      name: 'Vegeta',
      power: 7500
    },
  ]
  addCharacter(character:Character):void{
    const newCharacter:Character = {id: uuid(), ...character}

    this.personajes.push(newCharacter)
  }
  onDelete(index:number):void{
    console.log(index)
    this.personajes.splice(index,1)
  }
  deleteById(id:string):void{
    this.personajes = this.personajes.filter(p => p.id !== id)
  }
}
