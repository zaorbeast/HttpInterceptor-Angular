import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './api-key.interceptor';
import{ExercicePhysiqueModule} from './exercice-physique/exercice-physique.module'





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExercicePhysiqueModule


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ApiKeyInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
