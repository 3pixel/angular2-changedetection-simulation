import {Component, NgZone, ElementRef, DoCheck} from "@angular/core";
import {toggleClass} from "../../utils/toggle-class.service";

@Component({
  selector: 'simple-cd-one',
  host: {
    '(click)': 'stateChange()'
  },
  template: `
    <a>Cmp1</a>

    <ul>
      <li><simple-cd-two></simple-cd-two></li>
      <li><simple-cd-three></simple-cd-three></li>
    </ul>
  `
})
export class SimpleCDComponentOne implements DoCheck {
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
