import { Component, OnInit } from '@angular/core';
import * as figures from '../../assets/global/figures';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  figLinks: Array<string> = figures.figLinks;

  constructor() { }

  ngOnInit(): void {}

}
