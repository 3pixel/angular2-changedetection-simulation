import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SimpleChangeDetectionComponent} from "./simple-change-detection.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: SimpleChangeDetectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SimpleChangeDetectionRoutingModule {
}
