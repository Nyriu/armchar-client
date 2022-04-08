import { Component, OnInit, Input, NgModule } from '@angular/core';
import { TraitList } from '../../../trait';
import { Charsheet } from '../../../charsheet';
import { CharacteristicList } from '../../../characteristic';

//interface City {
//  name: string;
//  code: string;
//}

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.css']
})



export class CastingComponent implements OnInit {

  // TODO REMOVE
  lang = [
    { name: "HTML"     , value: 0 },
    { name: "ReactJS"  , value: 1 },
    { name: "Angular"  , value: 2 },
    { name: "Bootstrap", value: 3 },
    { name: "PrimeNG"  , value: 4 },
  ];


  // TODO
  // @Input
  // Character : for Characteristics, Abilities (Virtues and Flaws later time)
  // Magic : Tech Form

  @Input() ablist : TraitList ;
  //@Input() charsheet: Charsheet  ;
  @Input() charlist: CharacteristicList ;

  selectedTech = { name: "None"     , value: -1 };
  selectedForm = { name: "None"     , value: -1 };
  selectedAura = 0;

  staminaScore = -100;
  castingScore = -100;


  constructor() {
    //console.log("DEBUG charlist = ", this.charlist);
  }

  ngOnInit(): void {
    //console.log("DEBUG charlist = ", this.charlist);
  }
  initStamina(): boolean {
    this.staminaScore = this.charlist.get("Stamina").score;
    return this.staminaScore !== null;
  }

  calcCastingScore(): number {
    this.castingScore = this.selectedTech.value + this.selectedForm.value + this.staminaScore + this.selectedAura;
    return this.castingScore;
  }

  //// TODO
  //// pretty bad
  //get(k): string {
  //  console.log("get(",k,")");
  //  if ( this.charsheet === undefined ) return "" ;
  //  return this.charsheet.get(k) ;
  //} 

}

