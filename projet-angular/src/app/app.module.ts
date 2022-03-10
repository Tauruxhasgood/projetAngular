import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FiliereDetailComponent } from './filiere-detail/filiere-detail.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { UpdateFiliereComponent } from './update-filiere/update-filiere.component';

@NgModule({
  declarations: [
    AppComponent,
    FiliereComponent,
    FiliereDetailComponent,
    AddFiliereComponent,
    UpdateFiliereComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'filiereDetail/:id', component: FiliereDetailComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
