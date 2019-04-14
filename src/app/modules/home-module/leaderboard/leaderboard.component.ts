import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Score } from 'src/app/models/Score';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  public modalRef: BsModalRef;
  public leaderboard: Array<Score>;
  public valid: boolean;
  constructor(public modalService: BsModalService) { }

  @ViewChild('template') template: ElementRef;

  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'leaderboard-popup'
  };


  ngOnInit() {
    if (window.localStorage.getItem('leaderboard')) {
      this.leaderboard = JSON.parse(window.localStorage.getItem('leaderboard'));
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  openModal(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  closeModal(): void {
    this.modalRef.hide();
  }

}
