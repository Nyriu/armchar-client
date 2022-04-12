import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';


import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { PageAdvancementsComponent } from './page-advancements.component';
import { CharsheetModule } from './charsheet/charsheet.module';
import { AdvancementModule } from './advancement/advancement.module';

import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CharacterComponent } from './character/character.component';
import { PageCharsheetComponent } from './page-charsheet.component';
import { SeasonSelectorComponent } from './character/season-selector.component';
import { PageOneComponent } from './experiments/page-one/page-one.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MessagesComponent,
    TopbarComponent, 
    PageAdvancementsComponent,
    CharacterComponent,
    PageCharsheetComponent,
    SeasonSelectorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule, 
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    ScrollPanelModule, 
    DropdownModule, 
    ReactiveFormsModule, 
    InputNumberModule,
    // AppRoutingModule,
    CharsheetModule,
    AdvancementModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'charsheet', pathMatch: 'full'  },
    { path: 'experiments', component: PageOneComponent, },
    { path: 'character', component: CharacterComponent, },
    { path: 'charsheet', component: PageCharsheetComponent, },
    { path: 'adv', component: PageAdvancementsComponent },
    { path: 'saga', loadChildren: 
      () => import('./saga/saga.module').then( m => m.SagaModule ) }
], { relativeLinkResolution: 'legacy' }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
