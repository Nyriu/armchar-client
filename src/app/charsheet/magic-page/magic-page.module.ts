import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from "@angular/forms";

import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';

import { MagicPageComponent } from './magic-page.component';
import { ArtsComponent } from './arts.component';
import { ArtComponent } from './art.component';
import { SpellsComponent } from './spells.component';
import { DescriptionComponent } from './description.component';
import { CastingComponent } from './casting/casting.component';



@NgModule({
  declarations: [
    MagicPageComponent,
    ArtsComponent,
    ArtComponent,
    SpellsComponent,
    DescriptionComponent,
    CastingComponent,
    ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    SidebarModule,
    DropdownModule,
    //FormsModule,
  ],
  exports: [
    MagicPageComponent,
    ],
})
export class MagicPageModule { }
