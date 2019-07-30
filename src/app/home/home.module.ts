import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReferenciasComponent } from './referencias/referencias.component';

@NgModule({
  declarations: [HomeComponent, ReferenciasComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
