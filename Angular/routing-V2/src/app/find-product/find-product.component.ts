import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  constructor(private ps: ProductService, private route: ActivatedRoute) { }

  product:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));

      this.ps.findProduct(params.get('id')).subscribe(resposne => {
        this.product = resposne;
      })

    })
  }

}
