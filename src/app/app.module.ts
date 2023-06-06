import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedService } from './shared.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    //FirstComponent,
    AjoutComponent,
    ListComponent,
    HeaderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
