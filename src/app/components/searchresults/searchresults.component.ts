import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ExternalapiService} from '../../services/externalapi.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PreviewplayerComponent  } from '../previewplayer/previewplayer.component';
import {SpeechSynthesiserService} from '../../services/speech-synthesiser.service';
import {PhraseMatcherService} from '../../services/phrase-matcher.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
  searchResultsObj = {};
  artistname:string;
  nofotracks:number;
  playInstruction:string;
  playVoiceInstruction:string;
  invalidTrackCommandMsg:string;
  voiceSettingsComplete: any;
  resultsInstruction:string;

  constructor(private speechApi: SpeechSynthesiserService, private speechListenApi: PhraseMatcherService, private ajaxApi: ExternalapiService, private router:Router, private route:ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.voiceSettingsComplete = this.speechApi.populateVoiceSettings();
    this.artistname = this.route.snapshot.params['artistname'];
    this.nofotracks = this.route.snapshot.params['nofotracks'];
    this.invalidTrackCommandMsg = 'Not a valid track number to play! Please ask for a valid track. For example: "Play 11"';
    this.playInstruction = 'Tap on mic & say "Play ';
    this.playVoiceInstruction = 'Click on mic and say "Play ';
    this.resultsInstruction = 'Here you can ask for playing the preview tracks. For example: Click on mic and Say "Play 11"';
    let serviceUri: string = 'https://itunes.apple.com/search?term='+this.artistname+'&limit='+this.nofotracks;
    console.log(serviceUri);
    this.ajaxApi.getSearchResults(serviceUri).subscribe(data => {
      this.searchResultsObj = data;
      console.log(this.searchResultsObj);
    });
    this.speechApi.speakText("Below are the search results for "+this.artistname);
    this.speechApi.speakText(this.resultsInstruction);
  }
  commandToActionConnector(targetElement: any, callerReference:this, voiceResponseObj:{}) {
    console.log('commandToActionConnector called..');console.log(voiceResponseObj);
    targetElement.classList.remove("in-use");
    if(voiceResponseObj.hasOwnProperty("speechResult")) {
      console.log(voiceResponseObj["speechResult"]);
      // console.log("Initial inputSpeech:"+callerReference.inputSpeech);
      // targetElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = 'I heard "' + voiceResponseObj["speechResult"] + '"';
      // console.log("after assignment inputSpeech:"+callerReference.inputSpeech);
      let trackCommandPrefix = voiceResponseObj["speechResult"].substr(0,4).toLowerCase();
      let trackCommandIndex = voiceResponseObj["speechResult"].substr(5).toLowerCase();
      
      switch(trackCommandPrefix) {
        case "clea":
          targetElement.previousElementSibling.click();
          break;
        case "play":
          let selectedTrack = $("button[data-identifierbtn='"+ trackCommandPrefix + trackCommandIndex +"']");
          if(selectedTrack.length > 0) {
            selectedTrack.click();
          }
          else {
            callerReference.speechApi.speakText(callerReference.invalidTrackCommandMsg);
          }
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
  manoranjanSays(voiceText:string, trackNo:number) {
    // this.speechApi.stopSpeaking();
    let trackNoStr = trackNo < 9 ? 'Zero'+(trackNo+1)+'"' : (trackNo+1)+'"';
    this.speechApi.speakText(voiceText + trackNoStr);
  }
  openPlayerDialog(previewUrl:string) {
    const modalRef = this.modalService.open(PreviewplayerComponent, {centered: true, size: 'lg', backdropClass: 'light-blue-backdrop'});
    modalRef.componentInstance.iframeUrl = previewUrl;
    // modalRef.opened.then(function(){
    //   alert('hi');
    // });
  }

}
