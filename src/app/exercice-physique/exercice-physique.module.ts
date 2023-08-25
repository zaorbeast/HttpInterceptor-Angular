import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicepsComponent } from './biceps/biceps.component';



@NgModule({
  declarations: [
    BicepsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BicepsComponent,CommonModule
  ]
})
export class ExercicePhysiqueModule { }
