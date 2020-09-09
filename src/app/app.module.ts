import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule],
  declarations: [AppComponent, ChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
