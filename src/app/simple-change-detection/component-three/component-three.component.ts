import {Component, NgZone, ElementRef, DoCheck} from "@angular/core";
import {toggleClass} from "../../utils/toggle-class.service";

@Component({
  selector: 'simple-cd-three',
  host: {
    '(click)': 'stateChange()'
  },
  template: `
    <a>Cmp3</a>

    <ul>
      <li><simple-cd-six></simple-cd-six></li>
      <li><simple-cd-seven></simple-cd-seven></li>
    </ul>
  `
})
export class SimpleCDComponentThree implements DoCheck {
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
