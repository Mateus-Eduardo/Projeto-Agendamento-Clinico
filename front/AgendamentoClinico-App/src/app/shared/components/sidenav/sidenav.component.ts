import { Component, HostListener } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;

}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})

export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}


// import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core'
// import { BreakpointObserver } from '@angular/cdk/layout';
// import { fromEvent, map } from 'rxjs';



// export const SCROLL_CONTAINER = 'mat-sidenav-content';
// export const TEXT_LIMIT = 50;
// export const SHADOW_LIMIT = 100;


// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.scss'],
// })
// export class SidenavComponent {

//   public smallScreen = false;
//   public popText = false;
//   public applyShadow = false;

//   constructor(private breakpointObserver: BreakpointObserver){ }
//   ngOnInit(): void {
//     const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];
//     console.log (content);

//     fromEvent (content, 'scroll')
//     .pipe(
//       map(() => content.scrollTop)
//     )
//     .subscribe({
//       next: (value: number) => this.determineHeader(value)
//     })
//   }

//   determineHeader (scrollHeight: number){
//     console.log(scrollHeight)
//     this.popText = scrollHeight >= TEXT_LIMIT;
//     this.applyShadow = scrollHeight >= SHADOW_LIMIT;
//   }



//   ngAfterContentInit(): void{
//     this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
//       next: (res) => {                 //res = retorno
//         if (res.matches){
//           this.smallScreen = true;
//         }else{
//           this.smallScreen = false;
//         }
//       }
//     })
//   }

//   get sidenavMode() {
//     return this.smallScreen ? 'over' : 'side';
//   }

// }
