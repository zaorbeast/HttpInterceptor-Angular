import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../exercice.service';
import { ExerciceGetModel } from '../model/exerciceGet.model';
import { Select, Store } from '@ngxs/store';
import { ExerciseState } from '../store/exercise.state';
import { Observable } from 'rxjs';
import { GetExercisesAction } from '../store/exercice.action';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.css']
})
export class BicepsComponent implements OnInit {
 constructor(private _Service:ExerciceService,private _store:Store){}
 result:ExerciceGetModel[]=[];
 ngOnInit(): void {
this.getExircise()
 }
 @Select(ExerciseState.GetExerciseSelector)GetExercise$:Observable<ExerciceGetModel>|undefined
 getExircise()
 {
  this._store.dispatch(new GetExercisesAction());
  this.GetExercise$?.subscribe((res:any)=>
  {
    this.result=res
    console.log(res);

  })
 }
}
