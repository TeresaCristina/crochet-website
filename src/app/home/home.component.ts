/*Website Crochet Client - Teresa Costa
  Created: 26, April, 2021*/

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeLink: string = `https://www.etsy.com/ca/shop/ItchToStitchByTeresa?ref=profile_header`;
  storeLogo: string = `assets/images/itch-to-stitch-by-teresa-logo.gif`;

  constructor(){}

  ngOnInit(): void {
  }

}
