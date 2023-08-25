import { Component, OnInit } from '@angular/core';
import { HttpServicesTestService } from '../../http-services-test.service';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.css']
})
export class BicepsComponent implements OnInit {
 constructor(private Service:HttpServicesTestService){}
 result:any;
 ngOnInit(): void {
   this.Service.get().subscribe((data:any)=>
   {
    this.result=data;
    console.log(this.result);

   })
 }
}
