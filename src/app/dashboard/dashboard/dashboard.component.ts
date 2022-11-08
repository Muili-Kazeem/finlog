import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBriefcase, faChartSimple, faHouse, faMagnifyingGlass, faPowerOff, faRightLeft, faRocket, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Assigning FontAwesome icons
  faAnalytics = faChartSimple;
  faDashboard = faHouse;
  faLaunch = faRocket;
  faLogOut = faPowerOff;
  faBell = faBell;
  faBars = faBars;
  faCancel = faXmark;
  faUser = faUser;
  faClients = faBriefcase;
  faSearch = faMagnifyingGlass;
  faTransaction = faRightLeft;

  isNavOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Handles toggling of the Navbar in Responsive Modes
  toggleNav() :void {
    this.isNavOpen = !this.isNavOpen;
  }

}
