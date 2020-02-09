import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  elem: any = event;
  image = HTMLImageElement;

  constructor() { }

  ngOnInit() {
   fromEvent(document.images, 'click')
     .subscribe(event => console.log(event));
  }
}
