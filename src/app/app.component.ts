import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'colorShop';
  checkout_number = false;
  hamburger = $('.hamburger_container');
  menuActive = false;
  hamburgerClose = $('.hamburger_close');
  menu = $('.hamburger_menu');
  fsOverlay = $('.fs_menu_overlay');
  ngOnInit() {
    this.initMenu();
  }


  initMenu() {
    const that = this;
    if (this.hamburger.length) {
      this.hamburger.on('click', () => {
        console.log('Has the menu been clicked?');
        if (!this.menuActive) {
          that.openMenu();
        }
      });
    }

    if (this.fsOverlay.length) {
      this.fsOverlay.on('click', () => {
        if (this.menuActive) {
          this.closeMenu();
        }
      });
    }
  }

  openMenu() {
    this.menu.addClass('active');
    this.fsOverlay.css('pointer-events', 'auto');
    this.menuActive = true;
  }

  closeMenu() {
    this.menu.removeClass('active');
    this.fsOverlay.css('pointer-events', 'none');
    this.menuActive = false;
  }
}
