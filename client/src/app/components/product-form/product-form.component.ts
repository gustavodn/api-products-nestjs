import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

   product: ProductInterface = {
     name: '',
     description: '',
     price: 0,
     imageURL: ''
   };

   edit = false;
   params = {};
   
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     const params = this.activatedRoute.snapshot.params;
     console.log(params);
     if (params) {
      console.log('entro');
      this.productService.getProduct(params.id)
      .subscribe(
        res => {
          console.log(res),
          this.product =  res;
          this.edit = true;
        }
      );
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/']);
        },
        err => console.log(err)
      );
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
    .subscribe(
      res => {
        console.log(res),
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

}