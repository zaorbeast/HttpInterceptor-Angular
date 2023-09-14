import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import{ExercicePhysiqueModule} from './exercice-physique/exercice-physique.module';
import { ExerciceInterceptor } from './exercice-physique/exercice.interceptor';
import {NgxsModule} from '@ngxs/store'
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin'
import { ExerciseState } from './exercice-physique/store/exercise.state';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExercicePhysiqueModule,
    NgxsModule.forRoot([ExerciseState]),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
