import {Component, NgZone, ElementRef, DoCheck} from "@angular/core";
import {toggleClass} from "../../utils/toggle-class.service";

@Component({
  selector: 'simple-cd-seven',
  host: {
    '(click)': 'stateChange()'
  },
  template: `
    <a>Cmp7</a>
  `
})
export class SimpleCDComponentSeven implements DoCheck {
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
