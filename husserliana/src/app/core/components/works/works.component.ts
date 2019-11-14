import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleBookService } from '../../../shared/google-book.service';
import { Observable, from, fromEvent } from 'rxjs';
import { map, debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';

import { Book } from '../../../shared/book';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit, AfterViewInit{
  @ViewChild('input') input: ElementRef;
 constructor(private gooogleBookService: GoogleBookService) {

 }

 // tslint:disable-next-line:use-life-cycle-interface
 ngAfterViewInit() {
  fromEvent(this.input.nativeElement, 'keyup')
  .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(async (event: KeyboardEvent) => {
        const bo: Observable<Book[]> =
        this.gooogleBookService.search(this.input.nativeElement.value);

        const books: Book[] = await bo.toPromise();
        const bookid = books[0].id;
        console.log(`all books: ${books}`);

        const book = await this.gooogleBookService.getById(bookid).toPromise();
        console.log(`book: ${JSON.stringify(book)}`);
      })
  )
  .subscribe();
 }

 ngOnInit() {

 }
}
