import {Component, NgZone, ElementRef, DoCheck} from "@angular/core";
import {toggleClass} from "../../utils/toggle-class.service";

@Component({
  selector: 'simple-cd-five',
  host: {
    '(click)': 'stateChange()'
  },
  template: `
    <a>Cmp5</a>
  `
})
export class SimpleCDComponentFive implements DoCheck {
  public state: string;

  constructor(private zone: NgZone, private el: ElementRef) {
  }

  ngDoCheck() {
    toggleClass(this.el, this.zone);
  }

  stateChange() {
    this.state = Math.random() + "";
  }
}

