import { ImageService } from './../image/shared/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//  const email = require('./../../../node_modules/emailjs/email');
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css',
    '../../../styles/bootstrap4/bootstrap.min.css'
  ]
})
export class CategoriesComponent implements OnInit {
  image: any;
  quantity = 1;
  headToCheckOut = true;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: any;
  customerLocation: any;
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.image = this.imageService.getImage(+this.route.snapshot.params['id']);
    console.log(this.image);
  }

  add() {
    this.quantity = this.quantity + 1;
  }

  sub() {
    if (this.quantity !== 1) {
      this.quantity = this.quantity - 1;
    }
  }

  onHeadToCheckOut() {
    this.headToCheckOut = false;
  }

  emailButton() {
    const templateParams = {
      from_name: this.customerEmail,
      to_name: 'TrendGallery',
      message_html: 'Customer name: ' + this.customerName + '<br>' +
       'Customer Phone Number: ' + this.customerPhoneNumber + '<br>' +
       'Customer location: ' + this.customerLocation + '<br> ' +
      ' Order: Item Name: ' + this.image.caption + ', Quantity - ' + this.quantity + '<br>'

    };
    emailjs.send('gmail', 'order_form', templateParams , 'user_UmtTVPTPGuXEWtww2PcNx').then(
      (res: any) => {
        console.log('Successful ', res.status, res.text);
        Swal('Your order has been recieved and you will be contacted shortly. Thank you');
      },
      (err: any) => {
        Swal('Sorry we seem to be having some technical difficulties at the moment');
        console.log('Failed', err);
      }
    );


    // const server = email.server.connect({
    //   user: 'nacheampong@123gmail.com',
    //   password: '@dom@ko@21',
    //   host: 'smtp.gmail.com',
    //   ssl: true
    // });

    // server.send({
    //   text: 'Testing from the angular app',
    //   from: 'nana.acheampong@dreamoval.com',
    //   to: 'nacheampong123@gmail.com',
    //   subject: 'testing the smtp server'
    // }, function(err, message) {
    //   console.log(err || message);
    // });
  }

  get orderDetails() {
   return this.customerEmail && this.customerLocation && this.customerName && this.customerPhoneNumber;
  }
}
