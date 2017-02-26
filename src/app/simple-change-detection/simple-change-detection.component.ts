import {Component} from "@angular/core";
import {reset} from "../utils/toggle-class.service";

@Component({
  selector: 'app-simple-change-detection',
  template: `
            <h2>Simple Change Detection</h2>
            <p>Bármelyik elemre nyomva láthatjuk ahogy elindul a change detection.</p>
            <small><strong>Használat:</strong> nyomj a <i>reset</i> gombra az alap állapothoz, utána <i>kattints</i> bármelyik elemre</small>
            <div>
              <button (click)="stateChange()">Trigger Change Detection</button>
              <button (click)="reset()">Reset</button>
            </div>
            <div class="tree">
              <ul>
                <li>
                  <simple-cd-one></simple-cd-one>
                </li>
              </ul>
            </div>
            <div style="margin-bottom: 5em; clear: both;"></div>
  `
})
export class SimpleChangeDetectionComponent {
  public state: string;

  constructor() {
  }

  stateChange() {
    this.state = Math.random() + "";
  }

  reset() {
    reset();
  }
}
