import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SimpleChangeDetectionRoutingModule} from "./simple-change-detection-routing.module";
import {SimpleChangeDetectionComponent} from "./simple-change-detection.component";
import {SimpleCDComponentOne} from "./component-one/component-one.component";
import {SimpleCDComponentTwo} from "./component-two/component-two.component";
import {SimpleCDComponentThree} from "./component-three/component-three.component";
import {SimpleCDComponentFour} from "./component-four/component-four.component";
import {SimpleCDComponentFive} from "./component-five/component-five.component";
import {SimpleCDComponentSix} from "./component-six/component-six.component";
import {SimpleCDComponentSeven} from "./component-seven/component-seven.component";

@NgModule({
  imports: [
    CommonModule,
    SimpleChangeDetectionRoutingModule
  ],
  declarations: [
    SimpleChangeDetectionComponent,
    SimpleCDComponentOne,
    SimpleCDComponentTwo,
    SimpleCDComponentThree,
    SimpleCDComponentFour,
    SimpleCDComponentFive,
    SimpleCDComponentSix,
    SimpleCDComponentSeven
  ]
})
export class SimpleChangeDetectionModule {
}
