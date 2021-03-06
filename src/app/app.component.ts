import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { DataService } from './data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '田一块 VIG 矿池';
  status;
  public constructor(private titleService: Title, private meta: Meta,
     private dataService: DataService, private router: Router) {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'keywords', content: 'VIG,矿池,BITCOIN,比特币' });
  }

  ngOnInit() {
    // Initial Get status
    this.dataService.getStatus().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
      }
    });
  }
}
