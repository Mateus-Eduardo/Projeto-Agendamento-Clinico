import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';



export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

  public smallScreen = false;
  public popText = false;
  public applyShadow = false;

  constructor(private breakpointObserver: BreakpointObserver){ }
  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];
    console.log (content);

    fromEvent (content, 'scroll')
    .pipe(
      map(() => content.scrollTop)
    )
    .subscribe({
      next: (value: number) => this.determineHeader(value)
    })
  }

  determineHeader (scrollHeight: number){
    console.log(scrollHeight)
    this.popText = scrollHeight >= TEXT_LIMIT;
    this.applyShadow = scrollHeight >= SHADOW_LIMIT;
  }



  ngAfterContentInit(): void{
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {                 //res = retorno
        if (res.matches){
          this.smallScreen = true;
        }else{
          this.smallScreen = false;
        }
      }
    })
  }

  get sidenavMode() {
    return this.smallScreen ? 'over' : 'side';
  }

}
