import { ImageService } from './../image/shared/image.service';
import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var Isotope: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../../styles/bootstrap4/bootstrap.min.css',
    '../../../plugins/OwlCarousel2-2.2.1/animate.css',
    '../../../plugins/OwlCarousel2-2.2.1/owl.carousel.css',
    '../../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css'
  ]
})
export class HomeComponent implements OnInit, OnChanges {
  checkout_number = false;
  images: any[] = [];
  newItems: any[] = [];
  constructor(private imageService: ImageService, private router: Router) {
    this.initIsotopeFiltering();

  }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.newItems = this.images.slice(0, 4 );
    console.log('what the images are: ', this.images);
    console.log('New arrivals: ', this.newItems);
   this.loadScript('../../../js/custom.js');
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
    this.initIsotopeFiltering();

  }
  buyTrendofTheWeek() {
    console.log('Buying the trend of the week');
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToShop() {
    this.router.navigate(['/shop']);
  }

  sortButtonClick(sortValue: string) {
    const grid = document.querySelector('.product-grid');
    const iso = new Isotope(grid, {
      sortBy: sortValue
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  initIsotopeFiltering() {
    if ($('.grid_sorting_button').length) {
      $('.grid_sorting_button').click(function() {
        // putting border fix inside of setTimeout because of the transition duration
        setTimeout(function() {
          this.initFixProductBorder();
        }, 500);

        $('.grid_sorting_button.active').removeClass('active');
        $(this).addClass('active');

        const selector = $(this).attr('data-filter');
        $('.product-grid').isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });

        return false;
      });
    }
  }

  initFixProductBorder() {
    if ($('.product_filter').length) {
      const products = $('.product_filter:visible');
      const wdth = window.innerWidth;

      // reset border
      products.each(function() {
        $(this).css('border-right', 'solid 1px #e9e9e9');
      });

      // if window width is 991px or less

      if (wdth < 480) {
        for (let i = 0; i < products.length; i++) {
          const product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else if (wdth < 576) {
        if (products.length < 5) {
          const product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }
        for (let i = 1; i < products.length; i += 2) {
          const product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else if (wdth < 768) {
        if (products.length < 5) {
          const product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }
        for (let i = 2; i < products.length; i += 3) {
          const product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else if (wdth < 992) {
        if (products.length < 5) {
          const product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }
        for (let i = 3; i < products.length; i += 4) {
          const product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else {
        if (products.length < 5) {
          const product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }
        for (let i = 4; i < products.length; i += 5) {
          const product = $(products[i]);
          product.css('border-right', 'none');
        }
      }
    }
  }
}
