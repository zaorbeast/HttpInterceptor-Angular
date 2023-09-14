import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  constructor(private httpClient:HttpClient){}
  public getExercises() {

    return this.httpClient.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps');
  }

}
