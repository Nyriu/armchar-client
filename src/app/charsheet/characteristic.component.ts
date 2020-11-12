import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css']
})
export class CharacteristicComponent implements OnInit {

  @Input() characteristic: any ;

  constructor() { }

  ngOnInit(): void {
  }

}
