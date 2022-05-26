import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './../home/home.component'

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})

export class CustomModalComponent implements OnInit {
  @Input() fromParent : any

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.fromParent)
    
  }

  closeModal(message: string) {
    this.activeModal.close(false);
  }
  confirmed(){
    this.activeModal.close({confirmed:true})
    
    
  }
  
}


