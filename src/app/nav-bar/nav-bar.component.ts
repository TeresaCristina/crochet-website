/*Website Crochet Client - Teresa Costa
  Created: 20, April, 2021*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  storeLink: string = `https://www.etsy.com/ca/shop/ItchToStitchByTeresa?ref=profile_header`;

  constructor() { }

  ngOnInit(): void {
  }
}
