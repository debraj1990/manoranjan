import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';

import {ExternalapiService} from './services/externalapi.service';
import {SpeechSynthesiserService} from './services/speech-synthesiser.service';
import {PhraseMatcherService} from './services/phrase-matcher.service';


import { AppComponent } from './app.component';
import { ArtistlandingComponent } from './components/artistlanding/artistlanding.component';
import { SearchcriteriaComponent } from './components/searchcriteria/searchcriteria.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { PreviewplayerComponent } from './components/previewplayer/previewplayer.component';
import { FooterComponent } from './components/footer/footer.component';

//routing 
const appRoutes: Routes = [
  {path:'', component:ArtistlandingComponent},
  // {path:'search', component:SearchcriteriaComponent}, //not allowed as this is modal content
  {path:'searchresults/:artistname/:nofotracks', component:SearchresultsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ArtistlandingComponent,
    SearchcriteriaComponent,
    SearchresultsComponent,
    PreviewplayerComponent,
    FooterComponent
  ],
  entryComponents: [
    SearchcriteriaComponent,
    PreviewplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ExternalapiService, SpeechSynthesiserService, PhraseMatcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
