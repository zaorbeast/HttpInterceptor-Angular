import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesTestService {

  constructor(private httpClient:HttpClient){}public get() {
    return this.httpClient.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps');
  }
}
