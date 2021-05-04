/*Website Crochet Client - Teresa Costa
  Created: 29, April, 2021*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as figures from '../../assets/global/figures';
declare const shuffle: any;
declare const select: any;

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
  filtFigLinks: Array<Figures> = [{ link: "", alt: "", cat: "" }]
  name: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(routeParams => {
      this.name = routeParams.name;
      if (this.name === "All") {
        this.filtFigLinks = figures.figLinks;
      } else {
        this.filtFigLinks = select(this.figLinks, this.name);
      }
      shuffle(this.filtFigLinks);
    });
  }

  ngOnInit(): void { }


  
}