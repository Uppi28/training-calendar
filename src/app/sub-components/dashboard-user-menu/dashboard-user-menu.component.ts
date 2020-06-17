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
  }]

  public managerMenu = [{
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
    label: "Trainer View",
    icon_name: "bar_chart",
    isSelected: false,
    isDisabled: false,
    router: "trainer"
  }]

  menuList

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.menuList = this.manager ? this.managerMenu : this.userMenu;
  }

  menuSelected(selected) {
    this.menuList.forEach(d => {
      if (selected.label === d.label)
        d.isSelected = true;
      else
        d.isSelected = false;
    })
    if(this.manager) {
      this.router.navigate(["manager/"+selected.router])
    } else {
      this.router.navigate(["dashboard/"+selected.router])
    }
  }

}
