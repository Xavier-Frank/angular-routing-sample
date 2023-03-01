import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', redirectTo: "/first", pathMatch: "full"},
  {path: "first", component:FirstComponent},
  {path: "second", component: SecondComponent},
  {
    path:"**",
    component:PageNotFoundComponent,
    children: [{path:"''", redirectTo: "/first", pathMatch: "full"}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstComponent, SecondComponent];
