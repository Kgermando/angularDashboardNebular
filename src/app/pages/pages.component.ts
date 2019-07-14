import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './PAGE_MENU';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  // menu = MENU_ITEMS;
  
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
