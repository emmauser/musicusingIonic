import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {
currentYear:Date|any;
bool:boolean=true;
  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    setTimeout(()=>{
      this.bool=false;
    },2500)
     ;  }

}
