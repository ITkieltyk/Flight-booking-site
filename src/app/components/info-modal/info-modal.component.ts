import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {
  @Input() inputInfo: string = '';
  @Output() 'openClose': EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  info: string = '';
  ngOnInit(): void {
    this.info = this.inputInfo;
  }

  close() {
    this.openClose.emit(false);
  }
}
