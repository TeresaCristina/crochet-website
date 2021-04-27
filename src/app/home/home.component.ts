/*Website Crochet Client - Teresa Costa
  Created: 26, April, 2021*/

import { Component, OnInit } from '@angular/core';
import * as links from '../../assets/global/links';
import * as figures from '../../assets/global/figures';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeLink: string = links.storeLink;
  storeLogo: string = figures.storeLogo;

  constructor(){}

  ngOnInit(): void {}

}
