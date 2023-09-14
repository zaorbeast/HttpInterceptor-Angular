import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicepsComponent } from './biceps/biceps.component';
import {ExerciceInterceptor } from './exercice.interceptor';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import {NgxsModule} from '@ngxs/store'



@NgModule({
  declarations: [
    BicepsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule
  ],
  exports:[
    BicepsComponent,CommonModule,
    NgxsModule
  ]
  ,
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:ExerciceInterceptor,multi:true}
  ]
})
export class ExercicePhysiqueModule { }
