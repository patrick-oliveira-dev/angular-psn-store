import { Component, OnInit } from '@angular/core';
import {data} from '../../data/fake-data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	games = data;
	getGames() {
    return this.games; // Exclui o primeiro elemento (Big Card)
  }

}
