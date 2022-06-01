import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard_:P',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'User Profile_:D',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Table List_=D',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Typography_%',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons_%',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Maps_%',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications_%',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO_%',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
