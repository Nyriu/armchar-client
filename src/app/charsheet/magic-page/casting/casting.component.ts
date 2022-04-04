import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    //console.log("DEBUG charlist = ", this.charlist);
  }

  //// TODO
  //// pretty bad
  //get(k): string {
  //  console.log("get(",k,")");
  //  if ( this.charsheet === undefined ) return "" ;
  //  return this.charsheet.get(k) ;
  //} 

}

