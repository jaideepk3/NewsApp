import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsappapiService {

  constructor(private _http:HttpClient) { }

  // top headlines API URL
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2514de13f63d43fd8921f215c32424e7';
  // Technology news API URL
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2514de13f63d43fd8921f215c32424e7';
  // Business news API URL
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2514de13f63d43fd8921f215c32424e7';
  // Sports news API URL
  sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2514de13f63d43fd8921f215c32424e7';



  // For Sports Logic
  newsSports():Observable<any>{
    return this._http.get(this.sportsNews)
  }
  // For Business Logic
  newsBusiness():Observable<any>{
    return this._http.get(this.businessNews)
  }
  // For Tech Logic
  newsTech():Observable<any>{
    return this._http.get(this.techNews)
  }
  // For Headline Logic
  newsHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }
}
