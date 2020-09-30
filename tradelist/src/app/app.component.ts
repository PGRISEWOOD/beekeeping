import { Component, OnInit } from '@angular/core';
import { TradelistService } from './services/tradelist.service';

@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tradelist';
  content : string;

  constructor(private tradelistService: TradelistService){}

  ngOnInit(): void {
    this.tradelistService.getTradelist().subscribe(
      (response)  => {
        const start = response.data.indexOf("<tbody>");
        const end = response.data.indexOf("</tbody>");
        this.content = response.data.substring(start,end+8);
      },
      err => {
        this.content = "error loading trade list";
        alert(JSON.stringify(err));
      }
    )
  }


}
