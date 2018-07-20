import { Component, OnInit } from '@angular/core';
import { PmService } from '../pm.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:any[];

  constructor(private _pmService: PmService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    console.log('productlist component is running now...');
    this.getProductsFromService();
  }

  getProductsFromService(){
    console.log('getProductsFromService is running...');
    let obs = this._pmService.getProducts();
    obs.subscribe(
      data=>{
        console.log('Got data back via service',data);
        this.products=data['data'];
        console.log('Checking products now.',this.products);
      }
    )
  }

  onClickDelete(id:string){
    console.log('onClickDelete is running...');
    let obs=this._pmService.deleteOne(id);
    obs.subscribe(
      data=>{
        console.log('deleted one product tests tests tests:',data);
        this.getProductsFromService();
        console.log('passed getProductsFromService()..')
      });

  }

  goList(){
    console.log('in golist');
    this._router.navigate(['/products/list']);
    console.log('out golist');
  }

  // gohome(){
  //   this._router.navigate(['']);
  // }

  
  /* /products/edit/:id */
  /*onClickEdit(id:string){
    this._router.navigate(['products','edit',id]);
  }*/
}
