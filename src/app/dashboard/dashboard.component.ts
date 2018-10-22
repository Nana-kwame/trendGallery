import { Component, OnInit, OnChanges } from '@angular/core';
import * as anime from 'animejs';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  checkout_number = false;
  hamburger = $('.hamburger_container');
  menuActive = false;
  hamburgerClose = $('.hamburger_close');
  menu = $('.hamburger_menu');
  fsOverlay = $('.fs_menu_overlay');
  menu_item = $('.menu_item');
  header = $('.header');
  mode = 'over';
  constructor(private router: Router) {
    this.initMenu();
    this.setHeader();

    // $(document).on('scroll', function() {
    //  setHeader();
    // })

    $(document).on('scroll', () => {
      this.setHeader();
    });
    }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToShop() {
    this.router.navigate(['/shop']);
  }


  ngOnChanges() {
    // this.initMenu();
  }

  initMenu() {
    if (this.hamburger.length) {
      this.hamburger.on('click', () => {
        console.log('Has the menu been clicked?');
        if (!this.menuActive) {
          this.openMenu();
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
    if (this.hamburgerClose.length) {
      this.hamburgerClose.on('click', () => {
        if (this.menuActive) {
          this.closeMenu();
        }
      });
    }
    if (this.menu_item.length) {
      const items = document.getElementsByClassName('menu_item');
      for ( let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('has-children')) {
          items[i].addEventListener('click',  function() {
            this.classList.toggle('active');
            const panel = this.children[1];
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
            }
          });
        }
      }
    }
    console.log('Hamburger menu run');
  }

  setHeader() {
    if (window.innerWidth < 992) {
      if ($(window).scrollTop() > 100 ) {
        this.header.css({'top': '0'});
      } else {
        if ($(window).scrollTop() > 100) {
          this.header.css({'top': '-50px'});
        } else {
          this.header.css({'top': '0'});
        }
      }

      if (window.innerWidth > 991 && this.menuActive) {
        this.closeMenu();
      }
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
