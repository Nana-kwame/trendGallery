import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Butter from 'buttercms';

@Injectable({
  providedIn: 'root'
})


export class ImageService {
  visibileImages = [];
   baseUrl = 'http://104.248.238.250/wp-json/wp/v2/shop';

  constructor( public http: HttpClient) {}
  getImages() {
    return (this.visibileImages = IMAGES.slice(0));

    // return new Promise((resolve, reject) => {
    //   this.http.get(this.baseUrl).subscribe((res: any) => {
    //     this.visibileImages = res;
    //     console.log('The data from the wordpress site ', res);
    //     resolve(res);
    //   });
    // });
  }

  getImage(id: number) {
    return this.visibileImages.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {
    id: 1,
    category: 'men',
    caption: 'Coulier Watch',
    description: 'The stylish watch for the stlyish man. Limited in quantity place your order now',
    price: 300,
    url: '../../../assets/images/IMG_2093.JPG'
  },
  {
    id: 2,
    category: 'women',
    caption: 'Cartier Watch',
    description: 'Get the watch for yourself and the special partner, this watch is the perfect anniversy gift',
    price: 400,
    url: '../../../assets/images/IMG_2094.JPG'
  },
  {
    id: 3,
    category: 'men',
    caption: 'Supreme Hoodie',
    description: 'Cool hoodies, comes in different colors too',
    price: 325,
    url: '../../../assets/images/IMG_2096.JPG'
  },
  {
    id: 4,
    category: 'women',
    caption: 'Crop Top',
    description: 'Suede crop top for the stlyish afternoon out',
    price: 300,
    url: '../../../assets/images/IMG_2095.JPG'
  },
  {
    id: 5,
    category: 'accessories',
    caption: 'Supreme Camo Cap',
    description: 'Accessorise your outfit with this hat. It goes with almost everything',
    price: 225,
    url: '../../../assets/images/IMG_2097.JPG'
  },
  {
    id: 6,
    category: 'women',
    caption: 'Polka Dot sundress',
    description: 'Summer is over but you can still show off your legs in this awesome banger of a dress',
    price: 525,
    url: '../../../assets/images/IMG_2098.JPG'
  },
  {
    id: 7,
    category: 'women',
    caption: 'Denim Jacket',
    description: 'Awesome denim jacket for the stylish young ad outgoing girl',
    price: 423,
    url: '../../../assets/images/IMG_2099.JPG'
  },
  {
    id: 8,
    category: 'women',
    caption: 'Red dress',
    description: 'Hey you with the red dress on I wanna find a way to take it off you',
    price: 600,
    url: '../../../assets/images/IMG_2100.JPG'
  },
  {
    id: 9,
    category: 'men',
    caption: 'Yeezy',
    description: 'Best Shoes in the world',
    price: 700,
    url: '../../../assets/images/IMG_2101.JPG'
  },
  {
    id: 10,
    category: 'men',
    caption: 'High Tops',
    description: 'Best Shoes in the world',
    price: 500,
    url: '../../../assets/images/IMG_2102.JPG'
  }
  ,
  {
    id: 11,
    category: 'men',
    caption: 'Bundled outfit',
    description: 'Suscribe to this product and get the full set of outfits at a discount. Smash the suscribe button to get an alert.',
    price: 6069,
    url: '../../../assets/images/IMG_2122.PNG'
  }
];


