import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharsheetRoutingModule } from './charsheet-routing.module';

import { CharsheetComponent } from './charsheet.component';
import { CharheadComponent } from './charhead.component';
import { AbilitiesComponent } from './abilities.component';
import { CharacteristicsComponent } from './characteristics.component';
import { PtraitComponent } from './ptrait.component';
import { ReputationComponent } from './reputation.component';

import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import { VfComponent } from './vf.component';
import { EffectTraitComponent } from './effect-trait.component';
import { ScoreComponent } from './score.component';

@NgModule({
  declarations: [
    CharsheetComponent,
    CharheadComponent,
    AbilitiesComponent,
    CharacteristicsComponent,
    PtraitComponent,
    ReputationComponent,
    VfComponent,
    EffectTraitComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    CharsheetRoutingModule,
    PanelModule,
    TableModule,
  ]
})
export class CharsheetModule { }
