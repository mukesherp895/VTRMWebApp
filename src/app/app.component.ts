import { Component, OnInit } from '@angular/core';
import { CustomTitleService } from './services/CustomTitleService/custom-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'VTRM';
  constructor(private customeTitleService: CustomTitleService){}

  ngOnInit(): void {
    this.customeTitleService.seTitle('VTRM');
  }
}
