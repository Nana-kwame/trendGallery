import { ImageService } from './../image/shared/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//  const email = require('./../../../node_modules/emailjs/email');
import * as emailjs from 'emailjs-com';
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
        ' Order: Item Name: ' + this.image.caption + ', Quantity - ' + this.quantity
    };
    emailjs.send('gmail', 'order_form', templateParams , 'user_UmtTVPTPGuXEWtww2PcNx').then(
      (res: any) => {
        console.log('Successful ', res.status, res.text);
      },
      (err: any) => {
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
}
