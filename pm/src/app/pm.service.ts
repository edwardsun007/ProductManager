import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PmService {

  constructor(private _http: HttpClient) { }

  createProduct(product){
    console.log('Running createProduct on service...');
    return this._http.post('/products/create',product);
  }

  //get one
  getOne(id:string){
    console.log('Running getOne on service...');
    return this._http.get(`/products/${id}`);
  }

  //get all
  getProducts(){
    console.log('Running getProducts on service...');
    return this._http.get('/products');
  }

  //delete one
  deleteOne(id:string){
    console.log('Running deleteOne on service...');
    return this._http.delete(`/product/${id}`);
  }

  // find one and update
  updateOne(id:string,product){
    console.log('Running updateOne in service...');
    return this._http.put(`/product/${id}`,product);
  }


}
