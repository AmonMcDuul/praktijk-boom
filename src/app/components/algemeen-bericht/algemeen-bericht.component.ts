import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-algemeen-bericht',
  imports: [CommonModule],
  templateUrl: './algemeen-bericht.component.html',
  styleUrl: './algemeen-bericht.component.scss'
})
export class AlgemeenBerichtComponent {
  showModal = true;

  constructor() {

    // const seen = localStorage.getItem('seenInfoModal');

  //   if (!seen) {
  //     this.showModal = true;
  //     localStorage.setItem('seenInfoModal', 'true');
  //   } else {
  //     this.showModal = false;
  //   }
  }

  close() {
    this.showModal = false;
  }
}