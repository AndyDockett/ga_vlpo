import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import firebase environment
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
//
import { AppComponent } from './app.component';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //firebase initialize
     AngularFireModule.initializeApp(firebaseConfig)
     //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
