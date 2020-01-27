import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from '../app/feature/app-routing/app-routing.module';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { BioComponent } from './core/components/bio/bio.component';
import { WorksComponent } from './core/components/works/works.component';
import { HusserlComponent } from './core/components/husserl/husserl.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { BibliographyComponent } from './core/components/bibliography/bibliography.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './core/components/login/login.component';

import { GoogleBookService } from './shared/google-book.service';
import { GoogleBookInterceptor } from './shared/googlebook-token.interceptor';
import { AuthFirebaseService } from './shared/auth-firebase.service';
import { environment } from 'src/environments/environment';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    WorksComponent,
    HusserlComponent,
    GalleryComponent,
    BibliographyComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  NgwWowModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule,
  ChartsModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GoogleBookInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
