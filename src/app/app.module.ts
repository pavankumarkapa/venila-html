import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RamComponent } from './ram.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HandsHistoryComponent } from './hands-history/hands-history.component';
import { PopupComponent } from './popup/popup.component';

const appRoutes: Routes = [  
 
  { path: '',   redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'handshistory', component: HandsHistoryComponent },
  { path: 'popup', component: PopupComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
	RamComponent,
	AboutComponent,
	ServicesComponent,
	HandsHistoryComponent,
	PopupComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MaterialModule,
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
