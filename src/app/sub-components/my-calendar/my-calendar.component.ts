import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent implements OnInit {

  constructor() { }
  baseArray = [];
  groupedArray = [];
  selectedMY = {
    month: null,
    year: null,
    date: null
  };
  showDate;
  startOfDay;
  currentDays;
  todayDate = moment().format();
  daysList = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  monthListObjs = [];

  calendarType:string = "year";

  ngOnInit(): void {
    this.selectedMY.month = moment(this.todayDate).month() + 1;
    this.selectedMY.year = moment(this.todayDate).year();
    this.selectedMY.date = moment(this.todayDate).date();

    this.selectedMY.month = moment(this.todayDate).month() + 1;
    this.selectedMY.year = moment(this.todayDate).year();
    this.selectedMY.date = moment(this.todayDate).date();

    this.daysCollector();
    this.monthCollector();
  }

  daysCollector() {
    // this.selectedDateObj = this.datePickerService.getSelectedDate();

    this.startOfDay = moment(this.selectedMY.year + '-' + this.selectedMY.month, 'YYYY-MM').startOf('month').day();
    this.currentDays = moment(this.selectedMY.year + '-' + this.selectedMY.month, 'YYYY-MM').daysInMonth();
    this.showDate = moment(this.selectedMY.year + '-' + this.selectedMY.month, 'YYYY-MM').format('MMM YYYY');

    this.baseArray.length = 42;
    this.baseArray.fill(0);
    this.baseArray = this.baseArray.map(ele => {
      return {
        value: '',
        isSelected: false,
        isDisabled: false,
        isBlackList: false,
        arrContainer: []
      }
    })
    for (let i = 1; i <= this.currentDays; i++) {
      this.baseArray[i - 1].value = i;
    }

    this.baseArray = [...(new Array(this.startOfDay)).fill(0).map(ele => {
      return {
        value: '',
        isSelected: false,
        isDisabled: false,
        isBlackList: false,
        arrContainer: []
      }
    }), ...this.baseArray];


    this.baseArray.forEach(ele => {
      ele.isDisabled = ele.value ? false : true;
    });

    this.fillDots();

    for (let j = 0; j < 6; j++) {
      let index = 7 * j;
      this.groupedArray[j] = this.baseArray.slice(index, index + 7);
    }
    this.colouringDays();
  }

  fillDots() {
    this.baseArray.forEach(ba => {
      if ([1, 4, 6, 7, 8, 10, 17].includes(ba.value))
        ba.arrContainer = [1]
      else if ([23, 2, 18].includes(ba.value))
        ba.arrContainer = [1, 1]
    })
  }

  previousMonth() {

    this.selectedMY.month = this.selectedMY.month === 1 ? 12 : this.selectedMY.month - 1;
    this.selectedMY.year = this.selectedMY.month === 12 ? this.selectedMY.year - 1 : this.selectedMY.year;
    this.daysCollector();

  }

  nextMonth() {
    this.selectedMY.month = this.selectedMY.month === 12 ? 1 : this.selectedMY.month + 1;
    this.selectedMY.year = this.selectedMY.month === 1 ? this.selectedMY.year + 1 : this.selectedMY.year;
    this.daysCollector();
  }

  colouringDays() {
    let l_month = moment(this.todayDate).month() + 1;
    let l_year = moment(this.todayDate).year()
    if (l_month === this.selectedMY.month && l_year === this.selectedMY.year)
      [this.selectedMY].forEach(element => {

        let value = this.startOfDay - 1 + element.date;
        let row = Math.floor(value / 7);
        let column = value % 7;
        this.groupedArray[row][column].isSelected = true;
      });
  }


  monthCollector(){
    let globalIndex = 0;

    do {
      let l_arr = [];
      for (let index = 0; index < 4; index++) {
        let no = ((Math.floor(Math.random()*10) + 1) + 2*index);
        
        l_arr.push({
          label : this.monthList[globalIndex],
          noTraining :  no < 10 ?"0"+ no: no ,
          id : globalIndex+1,
          category : "past"
        })
        globalIndex++;        
      }
      this.monthListObjs.push(l_arr)
    }
    while(globalIndex < this.monthList.length);

    this.monthValidator();
  }

  monthValidator(){
    let l_currentYear = new Date().getFullYear();
    let l_currentMonth = new Date().getMonth()+1;

    if(l_currentYear === this.selectedMY.year){
      this.monthListObjs.forEach(row=>{
        row.forEach(ele => {
          if(ele.id === l_currentMonth)
            ele.category = "present"
          else if(ele.id < l_currentMonth)
            ele.category = "past"
          else if(ele.id > l_currentMonth)
            ele.category = "future"
        });
      })
    }
    else if(l_currentYear < this.selectedMY.year){
      this.monthListObjs.forEach(row=>{
        row.forEach(ele => {
          ele.category = "future"
        });
      })
    }
    else if(l_currentYear > this.selectedMY.year){
      this.monthListObjs.forEach(row=>{
        row.forEach(ele => {
          ele.category = "past"
        });
      })
    }

  }

  toggleNextPreviousYear(type){
    if(type === "previous")
      this.selectedMY.year = this.selectedMY.year - 1;
    else
      this.selectedMY.year = this.selectedMY.year + 1;

    this.monthValidator();
  }

  toggleView(type){
    this.calendarType = type;
    this.daysCollector()
  }

}
