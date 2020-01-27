import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  elem: any = event;

  constructor() { }

  ngOnInit() {
    fromEvent(document.images, 'screenX')
      .subscribe(e => console.log(e));
  }
}
