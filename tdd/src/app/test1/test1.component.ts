import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../shared/testservice.service';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit{
  constructor(private service:TestserviceService){
  }
campaignData:any
ngOnInit(): void {
  this.service.getData().subscribe((nData: any) => {
    console.log(nData.data)
    this.campaignData=nData.data
  })
}
sum(a:any,b:any){
  return a+b
}
fullname(firstname:string,lastname:string){
  return firstname+" "+lastname
}
 camelize(str:string) {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
sortStringToLower(data:string)
{
  return data.split("").sort().join("").toLowerCase();
}
}
