import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user-menu',
  templateUrl: './dashboard-user-menu.component.html',
  styleUrls: ['./dashboard-user-menu.component.scss']
})
export class DashboardUserMenuComponent implements OnInit {

  @Input() manager;

  public traineeView = [{
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

  public trainerView =[
    {
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
    }
  ]

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
  ]

  menuList

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.menuList = this.managerMenu
    this.manager = 'manager'
  }
  ngOnChanges(){
    if(this.manager == 'manager'){
      this.menuList = this.managerMenu
    }else if(this.manager == 'trainer'){
      this.menuList = this.trainerView
    }else{
      this.menuList = this.traineeView
    }
    this.menuList[0].isSelected = true;
  }
  menuSelected(selected) {
    this.menuList.forEach(d => {
      if (selected.label === d.label)
        d.isSelected = true;
      else
        d.isSelected = false;
    })
    // if(this.manager == 'manager') {
    //   this.router.navigate(["manager/"+selected.router])
    // } else if('trainer') {
    //   this.router.navigate(["dashboard/"+selected.router])
    // }else{
    //   this.router.navigate(["dashboard/"+selected.router])
    // }
    this.router.navigate(["dashboard/"+selected.router])
  }

}
