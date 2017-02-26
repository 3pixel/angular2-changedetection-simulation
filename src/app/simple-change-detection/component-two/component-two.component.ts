import {Component, NgZone, ElementRef, DoCheck} from "@angular/core";
import {toggleClass} from "../../utils/toggle-class.service";

@Component({
  selector: 'simple-cd-two',
  host: {
    '(click)': 'stateChange()'
  },
  template: `
    <a>Cmp2</a>

    <ul>
      <li><simple-cd-four></simple-cd-four></li>
      <li><simple-cd-five></simple-cd-five></li>
    </ul>
  `
})
export class SimpleCDComponentTwo implements DoCheck {
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

