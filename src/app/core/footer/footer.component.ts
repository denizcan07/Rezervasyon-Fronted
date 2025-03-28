import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  copyright: string = 'Copyright '+ (this.year)+ '. All rights reserved.    ';
  name : string = ' With Deniz Can TOŞUR    ' ;

  constructor() { }

  ngOnInit(): void {
  }

}
