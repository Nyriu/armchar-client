import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

//TODO eventually move to separate file
export class Character {
  name        : string;
  gender      : string;
  size        : number;
  profession  : string;
  player      : string;
  nationality : string;
  birthYear   : number;
  almaMater   : string;
  sagaTitle   : string;
  age         : number;
  SG          : string;

  constructor (name: string = "") {
    this.name = name;
  }

}

@Injectable({
  providedIn: 'root'
})
export class CharacterInSelectedSeasonService {

  //Behavior: always return the current value on subscription.
  characterSource = new BehaviorSubject<Character>(new Character("nobody"));



  constructor(http: HttpClient) {

    //TODO: It is fine to put an http request in the constructor of a service?
    http.get<Character>('/assets/character_in_selected_season.json').subscribe(
      (character) => {this.setCharacter(character)}
    )

    //simulate a changes after some seconds
    //setTimeout(() => {this.setCharacter(new Character("Garret"))}, 2000);
  }



  getCharacter(): Observable<Character> {
    return this.characterSource.asObservable();
  }



  setCharacter(character: Character): void {
    this.characterSource.next(character);
  }
}

