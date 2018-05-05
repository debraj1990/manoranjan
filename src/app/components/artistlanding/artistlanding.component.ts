import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { SearchcriteriaComponent } from '../searchcriteria/searchcriteria.component';
import {SpeechSynthesiserService} from '../../services/speech-synthesiser.service';
import {PhraseMatcherService} from '../../services/phrase-matcher.service';

@Component({
  selector: 'app-artistlanding',
  templateUrl: './artistlanding.component.html',
  styleUrls: ['./artistlanding.component.scss']
})
export class ArtistlandingComponent implements OnInit {
  fullImagePath: string;
  searchLabel: string;
  helloText: string;
  helloVocalText: string;
  welcomeText: string;
  voiceSettingsComplete: any;

  constructor(private speechApi: SpeechSynthesiserService, private speechListenApi: PhraseMatcherService, private modalService: NgbModal) { }

  ngOnInit() {
    this.voiceSettingsComplete = this.speechApi.populateVoiceSettings();
    this.fullImagePath = './assets/arrow.png';
    this.helloText = 'Click & Say "Hello Manoranjan"';
    this.helloVocalText = 'Click and Say "Hello Manoranjan"';
    this.welcomeText = 'Welcome to Manoranjan - The voice for Entertainment!!'
    this.searchLabel = 'Hello Dear; You can now search your entertainment stuff here. All you have to do is just click on mic & say: "Search Manoranjan"';
    this.voiceSettingsComplete.then(
      (val) => {console.log(val);
        this.speechApi.speakText(this.welcomeText);
        this.speechApi.speakText("To start, " + this.helloVocalText);
      });
    // this.speechListenApi.recognizeSpeechCommand('Hello Khojo', this, this.commandToActionConnector, event);
  }
  commandToActionConnector(targetElement: any, callerReference:this, voiceResponseObj:{}) {
    console.log('commandToActionConnector called..');console.log(voiceResponseObj);
    targetElement.classList.remove("in-use");
    if(voiceResponseObj.hasOwnProperty("speechResult")) {
      console.log(voiceResponseObj["speechResult"]);
      // console.log("Initial inputSpeech:"+callerReference.inputSpeech);
      // targetElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = 'I heard "' + voiceResponseObj["speechResult"] + '"';
      // console.log("after assignment inputSpeech:"+callerReference.inputSpeech);
      
      switch(voiceResponseObj["speechResult"].toUpperCase()) {
        case "HELLO MANORANJAN":
          callerReference.speechApi.speakText(callerReference.searchLabel);
          // callerReference.manoranjanSays(callerReference.searchLabel);
          break;
        case "SEARCH MANORANJAN":
          // callerReference.openSearchDialog();
          // callerReference.modalService.open(SearchcriteriaComponent, {centered: true, backdropClass: 'light-blue-backdrop'});
          targetElement.previousElementSibling.click();
          break;
        default:
          callerReference.speechApi.speakText(callerReference.speechApi.invalidCommandMsg);
          // callerReference.manoranjanSays(callerReference.speechApi.invalidCommandMsg);
          break;
      // callerReference.form.get('email').setValue("example@example.com");
      // targetElement.value = callerReference.artistname;
      }
    }
  }
  speakToManoranjan(event) {
    // this.speechApi.stopSpeaking();
    let target = event.target || event.srcElement || event.currentTarget;
    target.classList.add("in-use");
    this.speechListenApi.listenRealTimeSpeech(event, this, false, this.commandToActionConnector);
  }
  openSearchDialog() {
    // this.speechApi.stopSpeaking();
    const modalRef = this.modalService.open(SearchcriteriaComponent, {centered: true, size: 'lg', backdropClass: 'light-blue-backdrop'});
    // modalRef.componentInstance.name = 'World';
  }
}
