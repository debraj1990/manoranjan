import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SpeechSynthesiserService} from '../../services/speech-synthesiser.service';
import {PhraseMatcherService} from '../../services/phrase-matcher.service';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.scss']
})
export class SearchcriteriaComponent implements OnInit {
  // @Input() name;
  name = 'my app dialog';
  artistname:string;
  nofotracks:number;
  textLabel:string;
  voiceSettingsComplete: any;
  tapInstruction: string;
  fullImagePath: string;
  confirmPreText: string;
  confirmPostText: string;
  constructor(public activeModal: NgbActiveModal, private router:Router, private route:ActivatedRoute, private speechApi: SpeechSynthesiserService, private speechListenApi: PhraseMatcherService) { }

  ngOnInit() {
    this.voiceSettingsComplete = this.speechApi.populateVoiceSettings();
    // this.artistname = 'Debraj Ray';
    this.nofotracks = 25;
    this.textLabel = 'Enter any movie, album, artist, podcast, musicVideo, audiobook, tvSeason or shortFilm.';
    this.confirmPreText = 'I heard: "';
    this.confirmPostText = '"; If you want to search this term, then click on the mic and say "search Manoranjan"!!';
    this.tapInstruction = 'Just tap on the textbox and speak your search term';
    this.fullImagePath = './assets/arrow.png';
    // this.voiceSettingsComplete.then(
    //   (val) => {console.log(val);
        this.speechApi.speakText(this.textLabel + this.tapInstruction);
      // });
  }
  voiceToText(event) {
    this.speechApi.stopSpeaking();
    let voiceRealResponse = this.speechListenApi.listenRealTimeSpeech(event, this, false, this.populateTextToField);
    // callbackFn(voiceRealResponse);
  }
  populateTextToField(targetElement: any, callerReference:this, voiceResponseObj:{}) {
    console.log('populateTextToField called..');console.log(voiceResponseObj);
    if(voiceResponseObj.hasOwnProperty("speechResult")) {
      console.log(voiceResponseObj["speechResult"]);
      console.log("Initial artistname:"+callerReference.artistname);
      callerReference.artistname = voiceResponseObj["speechResult"];
      // callerReference.form.get('email').setValue("example@example.com");
      targetElement.value = callerReference.artistname;
      callerReference.speechApi.speakText(callerReference.confirmPreText + callerReference.artistname + callerReference.confirmPostText);
    }
    console.log("After artistname:"+callerReference.artistname);
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
        // case "HELLO MANORANJAN":
        //   callerReference.speechApi.speakText(callerReference.searchLabel);
        //   // callerReference.manoranjanSays(callerReference.searchLabel);
        //   break;
        case "SEARCH MANORANJAN":
          // callerReference.modalService.open(SearchcriteriaComponent, {centered: true, backdropClass: 'light-blue-backdrop'});
          targetElement.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.click();
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
  submitSearchCriteria() {
    this.router.navigate(['searchresults/'+this.artistname+'/'+this.nofotracks]);
    this.activeModal.close('Close click');
  }
}
