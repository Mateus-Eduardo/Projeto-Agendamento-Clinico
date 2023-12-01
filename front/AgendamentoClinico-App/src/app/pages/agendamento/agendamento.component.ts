import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent {


  Events = []

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    plugins: [dayGridPlugin]
  };

  // onDateClick(res:{dateStr:string}){
  //   alert("You clicked on :" + res.dateStr)
  // }

  constructor() { }

  ngOnInit() {
    // setTimeout(() =>{

    //   this.calendarOptions = {
    //     initialView: 'dayGridMonth',
    //     dateClick:this.onDateClick.bind(this),
    //     events:this.Events
    //   }
    // },3500)
  }

}
