import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  formTemplate = new FormGroup({
    caption: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
