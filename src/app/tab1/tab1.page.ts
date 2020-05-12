import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public list:any=[{'title':'早上','content':'7点起床，7点半吃早点'},{'title':'中午','content':'13点睡午觉，13点半起床准备上课'}];

  constructor() {}
  
  ngOnInit(){
   
  }

}
