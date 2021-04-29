/*Website Crochet Client - Teresa Costa
  Created: 29, April, 2021*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as figures from '../../assets/global/figures';

class Figures {
  link: string = "";
  alt: string = "";
  cat: string = "";
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  figLinks: Array<Figures> = figures.figLinks;

  name: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.paramMap.get('name') || "";
    this.name = this.name.toLowerCase();
  }

  ngOnInit(): void {
    this.shuffle(this.figLinks);
  }

  shuffle(originalArray: Array<Figures>) {
    for (let i = originalArray.length - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [originalArray[i], originalArray[index]] = [originalArray[index], originalArray[i]];
    }
  }

  select(originalArray: Array<Figures>, category: string) {
    let filtered = originalArray.filter(function (figure) { return figure.cat == category; });
  }
}