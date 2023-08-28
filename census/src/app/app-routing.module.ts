import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusListComponent } from './component/census-list/census-list.component';
import { AddCensusComponent } from './component/add-census/add-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'census-list' },
  { path: 'census-list', component: CensusListComponent },
  { path: 'add-census', component: AddCensusComponent },
  { path: '', pathMatch: 'full', redirectTo: 'delete-census/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
