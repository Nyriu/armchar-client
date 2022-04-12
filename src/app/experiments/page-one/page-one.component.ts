import { Component, OnInit } from '@angular/core';
import { Character, CharacterInSelectedSeasonService } from 'src/app/character-in-selected-season.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styles: [
  ]
})
export class PageOneComponent implements OnInit {

  character: Character;

  constructor(characterService: CharacterInSelectedSeasonService) {

    characterService.getCharacter().subscribe(
      (character) => {this.character = character}
    );

  }

  ngOnInit(): void {
  }

}
