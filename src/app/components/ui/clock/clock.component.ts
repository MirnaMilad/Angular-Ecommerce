import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit{
  
  days:number;
  hours:number;
  minutes:number;
  seconds:number;

  ngOnInit(): void {
     const interval = setInterval(()=>{
      const destination = new Date('Jan 1 , 2030').getTime()
      const now = new Date().getTime()
      const different = destination - now
     

      if(destination < 0) clearInterval(interval)
      else{
        this.days = Math.floor(different / (1000 *60*60*24))

        this.hours = Math.floor(different % (1000 *60*60*24)/(1000*60*60))
  
        this.minutes = Math.floor(different % (1000 *60*60)/(1000*60))
  
        this.seconds = Math.floor(different % (1000 *60)/1000)
      }
    })
  }
}
