import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from '../app/feature/app-routing/app-routing.module';
// import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';
import { ChartsModule } from 'ng2-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';




import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { BioComponent } from './core/components/bio/bio.component';
import { WorksComponent } from './core/components/works/works.component';
import { HusserlComponent } from './core/components/husserl/husserl.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { BibliographyComponent } from './core/components/bibliography/bibliography.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './core/components/login/login.component';

import { GoogleBooksService } from './shared/googlebooks.service';
import { GoogleBooksInterceptor } from './shared/googlebooks-token.interceptor';
import { AuthFirebaseService } from './shared/auth-firebase.service';
// import { environment } from 'src/environments/environment';
import { GermanLiteratureComponent } from './core/pages/german-literature/german-literature.component';
import { RussianLiteratureComponent } from './core/pages/russian-literature/russian-literature.component';
import { ForeignLiteratureComponent } from './core/pages/foreign-literature/foreign-literature.component';
import { TranslocoModule, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

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
    LoginComponent,
    GermanLiteratureComponent,
    RussianLiteratureComponent,
    ForeignLiteratureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgwWowModule,
    ChartsModule,
    AccordionModule.forRoot(),
    TranslocoModule,
    TranslocoRootModule,
    TranslocoLocaleModule.init({
      langToLocaleMapping: {
            en: 'en-US',
              ru: 'ru-RU',
              de: 'de'
        }})
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GoogleBooksInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
