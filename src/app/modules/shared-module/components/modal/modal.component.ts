import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() title:string = "LOG IN";
  @Output() close:EventEmitter<any> = new EventEmitter();
  @Output() submit:EventEmitter<any> = new EventEmitter();
  

  public currentUser:string = window.sessionStorage.getItem('currentUser');
  constructor() { }

  ngOnInit() {
  }

  submitData(){
    this.submit.emit();
  }

  closeModal() {
    this.close.emit();
  }

}
