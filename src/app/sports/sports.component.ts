import { Component, OnInit } from '@angular/core';
import { NewsappapiService } from '../service/newsappapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:NewsappapiService) { }

  // sports News Data
  sportsNewsData:any = [];
  ngOnInit(): void {
    this.api.newsSports().subscribe((result)=>{
      console.log(result.articles);
      this.sportsNewsData = result.articles;
    })
  }

}
