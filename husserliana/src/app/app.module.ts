import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from '../app/feature/app-routing/app-routing.module';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { BioComponent } from './core/components/bio/bio.component';
import { WorksComponent } from './core/components/works/works.component';
import { HusserlComponent } from './core/components/husserl/husserl.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { BibliographyComponent } from './core/components/bibliography/bibliography.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SpringerApiService } from './shared/springer-api.service';
import { AuthKeyInterceptor } from '../app/shared/springer-token.interceptor';

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
    NavbarComponent
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
  HttpClientModule
  ],
  exports: [],
  providers: [
    { provide: SpringerApiService, useClass: SpringerApiService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
