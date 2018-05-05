import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-previewplayer',
  templateUrl: './previewplayer.component.html',
  styleUrls: ['./previewplayer.component.scss']
})
export class PreviewplayerComponent implements OnInit {
  @Input() iframeUrl;
  modalWidth: number;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // this.setVideoWidth();
  }
  setVideoWidth() {
    let modalBody = $(".modal-body");
    this.modalWidth = modalBody.width();
    console.log(this.modalWidth);
    modalBody.find("video").attr("width",this.modalWidth - 48);
  }
}
