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



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'bio', component: BioComponent},
  { path: 'works', component: WorksComponent },
  { path: 'husserl', component: HusserlComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'bibliography', component: BibliographyComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TranslateModule
  ],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
