import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, NavComponent, FooterComponent, LayoutComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
