import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HeadComponent, FooterComponent, MainComponent,MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeadComponent,
    FooterComponent,
    MainComponent,
    MenuComponent
  ]
})
export class CoreModule { }
