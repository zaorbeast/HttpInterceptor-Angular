import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ExerciceGetModel } from "../model/exerciceGet.model";
import { Injectable } from "@angular/core";
import { ExerciceService } from "../exercice.service";
import { GetExercisesAction } from "./exercice.action";
import { tap } from "rxjs";

export interface ExercicesStateModel
{
  GetExercise:ExerciceGetModel[]
}
@State<ExercicesStateModel>({
  name:"Exercises",
  defaults: {
    GetExercise: []
  }
})
@Injectable()
export class ExerciseState
{
constructor(private _service:ExerciceService){}
@Selector()
static GetExerciseSelector(state:ExercicesStateModel)
{
  return state.GetExercise
}
@Action(GetExercisesAction)
getExerciseStateAction(_context:StateContext<ExercicesStateModel>)
{
return this._service.getExercises().pipe(tap((res:any)=>
{
  const state=_context.getState()
  _context.setState({
    ...state,
    GetExercise:res
  })
}))
}
}
