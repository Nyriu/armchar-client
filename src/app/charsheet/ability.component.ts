import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  @Input() ab : any ;

  constructor() { }

  ngOnInit(): void {
  }

}
