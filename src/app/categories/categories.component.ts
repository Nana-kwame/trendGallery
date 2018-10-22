import { ImageService } from './../image/shared/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css',
'../../../styles/bootstrap4/bootstrap.min.css']
})
export class CategoriesComponent implements OnInit {
image: any;
quantity = 1;
headToCheckOut = true;
  constructor( private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage( +this.route.snapshot.params['id']);
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

}
