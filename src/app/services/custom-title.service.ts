import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomTitleService {
  constructor(private titleService: Title) { }

  seTitle(title: string): void{
    this.titleService.setTitle(title);
  }
}
