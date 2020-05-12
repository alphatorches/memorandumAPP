import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.page.html',
  styleUrls: ['./newnote.page.scss'],
})
export class NewnotePage implements OnInit {

  public title:string="";
  public content:string="";

  constructor() { }

  ngOnInit() {
   
  }

  newNote(){
    console.log(this.title);
    console.log(this.content);
  }

}
