import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { PanelsComponent } from './panels/panels.component';
import { TableComponent } from './table/table.component';
import { JqGridComponent } from './jq-grid/jq-grid.component';


const routes: Routes = [

  //  { path: '', redirectTo: '/panels', pathMatch: 'full' },
    { path: 'chart', component: ChartComponent },
    { path: 'panels', component: PanelsComponent },
    { path: 'table', component: TableComponent },
    { path: 'jq-grid', component: JqGridComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
