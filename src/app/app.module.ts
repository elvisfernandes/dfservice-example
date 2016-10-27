import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';
import { DFService, DFResource } from 'ng2-dfservice';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DFService,
    { provide: DFService.API_URL, useValue: environment.df2_url },
    { provide: DFService.API_KEY, useValue: environment.df2_api_key },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
