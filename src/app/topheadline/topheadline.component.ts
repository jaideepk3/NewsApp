import { Component, OnInit } from '@angular/core';
import { NewsappapiService } from '../service/newsappapi.service';
@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:NewsappapiService) { }

  //display headlines data
  topHeadlinesData:any =[];
  ngOnInit(): void {
    this.api.newsHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    })
  }

}
