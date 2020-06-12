import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user-menu',
  templateUrl: './dashboard-user-menu.component.html',
  styleUrls: ['./dashboard-user-menu.component.scss']
})
export class DashboardUserMenuComponent implements OnInit {

  @Input() manager?: boolean;

  public userMenu = [{
    label: "My Home",
    icon_name: "home",
    isSelected: false,
    isDisabled: false,
    router: "home"
  },
  {
    label: "My Trainings",
    icon_name: "calendar_today",
    isSelected: false,
    isDisabled: false,
    router: "trainings"
  },
  {
    label: "My Team",
    icon_name: "people",
    isSelected: false,
    isDisabled: false,
    router: "team"
  },
  {
    label: "Analytics",
    icon_name: "bar_chart",
    isSelected: false,
    isDisabled: false,
    router: "team"
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
    if(this.manager) {
      this.router.navigate(["manager/"+selected.router])
    } else {
      this.router.navigate(["dashboard/"+selected.router])
    }
  }

}
