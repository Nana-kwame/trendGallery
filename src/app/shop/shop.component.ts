import { ImageService } from './../image/shared/image.service';
import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import * as jquery from 'jquery';
declare const $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: [
    './shop.component.css',
    '../../../styles/bootstrap4/bootstrap.min.css',
    '../../../plugins/OwlCarousel2-2.2.1/animate.css',
    '../../../plugins/OwlCarousel2-2.2.1/owl.carousel.css',
    '../../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
    '../../../plugins/jquery-ui-1.12.1.custom/jquery-ui.css'
  ]
})
export class ShopComponent implements OnInit, OnChanges {
  sort = 'original-order';
  clothes: any[];
  filterBy ? = 'all';
  visibileImages: any[] = [];
  constructor(private imageService: ImageService) {
    console.log(this.filterBy);
  }

  ngOnChanges() {
     this.imageService.getImages().then((res: any) => {
       this.visibileImages = res;
      console.log(this.visibileImages);
     });
    this.initIstopeFiltering();
    // this.initPriceSlider();
  }

  ngOnInit() {
    this.imageService.getImages().then((res: any) => {
      this.visibileImages = res;
     console.log(this.visibileImages);
    });
  }

  initPriceSlider() {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 1000,
      values: [0, 580],
      slide: function(event, ui) {
        $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
      }
    });

    $('#amount').val(
      '$' +
        $('#slider-range').slider('values', 0) +
        ' - $' +
        $('#slider-range').slider('values', 1)
    );
  }

  initIstopeFiltering() {
    const sortTypes = $('.type_sorting_btn');
    const sortNums = $('.num_sorting_btn');
    const sortTypesSelected = $(
      '.sorting_type .item_sorting_btn is-checked span'
    );
    const filterButton = $('.filter_button');

    if ($('.product-grid').length) {
      $('.product-grid').isotope({
        itemSelector: '.product-item',
        getSortData: {
          price: function(itemElement) {
            const priceEle = $(itemElement)
              .find('.product_price')
              .text()
              .replace('$', '');
            return parseFloat(priceEle);
          },
          name: '.product_name',
          category: '.product_category'
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });

      // Short based on the value from the sorting_type dropdown
      sortTypes.each(function() {
        $(this).on('click', function() {
          $('.type_sorting_text').text($(this).text());
          let option = $(this).attr('data-isotope-option');
          option = JSON.parse(option);
          $('.product-grid').isotope(option);
        });
      });

      // Show only a selected number of items
      sortNums.each(function() {
        $(this).on('click', function() {
          const numSortingText = $(this).text();
          const numFilter = ':nth-child(-n+' + numSortingText + ')';
          $('.num_sorting_text').text($(this).text());
          $('.product-grid').isotope({ filter: numFilter });
        });
      });

      // Filter based on the price range slider
      filterButton.on('click', function() {
        $('.product-grid').isotope({
          filter: function() {
            const priceRange = $('#amount').val();
            const priceMin = parseFloat(
              priceRange.split('-')[0].replace('$', '')
            );
            const priceMax = parseFloat(
              priceRange.split('-')[1].replace('$', '')
            );
            const itemPrice = $(this)
              .find('.product_price')
              .clone()
              .children()
              .remove()
              .end()
              .text()
              .replace('$', '');

            return itemPrice > priceMin && itemPrice < priceMax;
          },
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
      });
    }
  }

  onDefaultSort() {
    this.sort = 'original-order';
    this.filterBy = 'all';
  }

  onPriceSort() {
    this.sort = 'Price';
  }

  onProductSort() {
    this.sort = 'Product Name';
  }
}
