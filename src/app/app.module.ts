import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { ChartComponent } from './chart/chart.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { JqGridComponent } from './jq-grid/jq-grid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
   declarations: [
    AppComponent,
    PanelsComponent,
    ChartComponent,
    TableComponent,
    JqGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
