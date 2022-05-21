import { Component, OnInit } from '@angular/core';
import { NewsappapiService } from '../service/newsappapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:NewsappapiService) { }

  // businessNewsData
  businessNewsData:any = [];
  ngOnInit(): void {
    this.api.newsBusiness().subscribe((result)=>{
      console.log(result.articles);
      this.businessNewsData = result.articles;
    })
  }

}
