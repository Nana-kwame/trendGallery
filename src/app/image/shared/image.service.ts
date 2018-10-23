import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibileImages = [];

  getImages() {
    return (this.visibileImages = IMAGES.slice(0));
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {
    id: 1,
    category: 'men',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_1.png'
  },
  {
    id: 2,
    category: 'women',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_2.png'
  },
  {
    id: 3,
    category: 'women',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_3.png'
  },
  {
    id: 4,
    category: 'women',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_4.png'
  },
  {
    id: 5,
    category: 'men',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_5.png'
  },
  {
    id: 6,
    category: 'accessories',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_6.png'
  },
  {
    id: 7,
    category: 'women',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_7.png'
  },
  {
    id: 8,
    category: 'accessories',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_8.png'
  },
  {
    id: 9,
    category: 'men',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_9.png'
  },
  {
    id: 10,
    category: 'men',
    caption: 'Nice Shoes',
    price: 300,
    url: '../../../../images/product_10.png'
  }
  ,
  // {
  //   id: 11,
  //   category: 'men',
  //   caption: 'Hoodie',
  //   price: 400,
  //   url: '../../../../images/test_product2.png'
  // }
];