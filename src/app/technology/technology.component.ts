import { Component, OnInit } from '@angular/core';
import { NewsappapiService } from '../service/newsappapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private api:NewsappapiService) { }

  // tech News Data
  techNewsData:any = [];
  ngOnInit(): void {
    this.api.newsTech().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }

}
