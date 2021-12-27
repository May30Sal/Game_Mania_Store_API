import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userModel = new User('');

  onSubmit() {
    console.log(this.userModel);
  }
}
