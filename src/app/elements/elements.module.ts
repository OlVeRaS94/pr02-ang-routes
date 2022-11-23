import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuIzqComponent } from './menu-izq/menu-izq.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuIzqComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    MenuIzqComponent
  ]
})
export class ElementsModule { }
