import { Component, OnInit } from '@angular/core';
import { PmService } from '../pm.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  errorMsg:string[];
  newProduct:any;

  constructor(
    private _pmService: PmService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  ngOnInit() {
    this.newProduct={
      title:"",
      price:"",
      image:""
    }
  }
  onCreate():void{
    console.log('productcreate->onCreate():');
    console.log('newProduct.title=',this.newProduct.title);
    console.log('newProduct.price=',this.newProduct.price);
    console.log('newProduct.image=',this.newProduct.image);
    this.errorMsg=[]; // reset it before next query call

    let obs = this._pmService.createProduct(this.newProduct);
    obs.subscribe(
     data=>{
       if(data['error']&&data['error']['errors']['title']!=undefined){
         console.log('data[error][errors][title][message]=',data['error']['errors']['title']['message']);
         this.errorMsg.push(data['error']['errors']['title']['message']);
       }
      else if(data['error']&&data['error']['errors']['price']!=undefined){
        console.log('data[error][errors][price][message]=',data['error']['errors']['price']['message']);
        this.errorMsg.push(data['error']['errors']['price']['message']);
      }
      else if(data['error']&&data['error']['errors']['image']!=undefined){
        console.log('data[error][errors][image][message]=',data['error']['errors']['image']['message']);
        this.errorMsg.push(data['error']['errors']['image']['message']);
      }
      else{
        console.log('Got data back for creating via service:',data);
        this.goHome();
      }
      //console.log('what is errorMsg:',this.errorMsg);
     }
   )
 }
  goHome(){
  this._router.navigate(['']);
}

}
