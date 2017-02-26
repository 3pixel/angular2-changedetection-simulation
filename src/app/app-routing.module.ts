import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
// import {SimpleChangeDetectionModule} from "./simple-change-detection/simple-change-detection.module";

// export function loadSimpleChangeDetectionModule() { return SimpleChangeDetectionModule; }
// lazy load: https://github.com/Meligy/routing-angular-cli/tree/deep-lazy-loading/src/app
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'simple-change-detection', loadChildren:loadSimpleChangeDetectionModule}
  {path: 'simple-change-detection', loadChildren: 'app/simple-change-detection/simple-change-detection.module#SimpleChangeDetectionModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
