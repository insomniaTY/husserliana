import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { HomeComponent } from 'src/app/core/components/home/home.component';
import { BioComponent } from 'src/app/core/components/bio/bio.component';
import { HusserlComponent } from 'src/app/core/components/husserl/husserl.component';
import { WorksComponent } from 'src/app/core/components/works/works.component';
import { BibliographyComponent } from 'src/app/core/components/bibliography/bibliography.component';
import { GalleryComponent } from 'src/app/core/components/gallery/gallery.component';
import { LoginComponent } from '../../core/components/login/login.component';
import { RussianLiteratureComponent } from 'src/app/core/pages/russian-literature/russian-literature.component';
import { GermanLiteratureComponent } from 'src/app/core/pages/german-literature/german-literature.component';
import { ForeignLiteratureComponent } from 'src/app/core/pages/foreign-literature/foreign-literature.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, children: [
    {path: '', redirectTo: 'app-home', pathMatch: 'full'}
  ]},
  {path: '', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'bio', component: BioComponent, children: [
    { path: '', redirectTo: 'app-bio', pathMatch: 'full' }
  ]},
  { path: 'works', component: WorksComponent, children: [
    { path: '', redirectTo: 'app-works', pathMatch: 'full' }
  ] },
  { path: 'husserl', component: HusserlComponent },
  { path: 'gallery', component: GalleryComponent, children: [
    { path: '', redirectTo: 'app-gallery', pathMatch: 'full' }
  ]},
  { path: 'bibliography', component: BibliographyComponent, children: [
  {path: 'russianLiterature', component: RussianLiteratureComponent},
  {path: 'germanLiterature', component: GermanLiteratureComponent},
  {path: 'foreignLiterature', component: ForeignLiteratureComponent},
  { path: '', redirectTo: 'app-bibliography', pathMatch: 'full' },
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
