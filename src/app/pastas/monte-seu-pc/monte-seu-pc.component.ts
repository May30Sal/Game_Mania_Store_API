import { Component, OnInit } from '@angular/core';
import { MonteSeuPc } from 'src/app/models/monte-seu-pc';

@Component({
  selector: 'app-monte-seu-pc',
  templateUrl: './monte-seu-pc.component.html',
  styleUrls: ['./monte-seu-pc.component.css'],
})
export class MonteSeuPcComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  monteSeuPcModel = new MonteSeuPc('', '', '', '');

  onSubmit() {
    console.log(this.monteSeuPcModel);
  }
}
