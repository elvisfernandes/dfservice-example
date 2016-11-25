import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

import { DFService } from 'ng2-dfservice';
import { APP_DATASTORES } from './appdatastores';

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
    APP_DATASTORES,
    { provide: DFService.API_URL, useValue: environment.df2_url },
    { provide: DFService.API_KEY, useValue: environment.df2_api_key }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
