import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user-menu',
  templateUrl: './dashboard-user-menu.component.html',
  styleUrls: ['./dashboard-user-menu.component.scss']
})
export class DashboardUserMenuComponent implements OnInit {

  public userMenu = [{
    label: "My Home",
    icon_name: "home",
    isSelected: true,
    isDisabled: false,
    router: "home"
  },
  {
    label: "Calendar",
    icon_name: "calendar_today",
    isSelected: false,
    isDisabled: false,
    router: "home"
  },
  {
    label: "Analytics",
    icon_name: "bar_chart",
    isSelected: false,
    isDisabled: false,
    router: "home"
  },
  {
    label: "Training",
    icon_name: "list_alt",
    isSelected: false,
    isDisabled: false,
    router: "home"
  }]


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  menuSelected(selected) {
    this.userMenu.forEach(menu => {
      if (selected.label === menu.label)
        menu.isSelected = true;
      else
        menu.isSelected = false;
    })
    this.router.navigate([selected.router])
  }

}
