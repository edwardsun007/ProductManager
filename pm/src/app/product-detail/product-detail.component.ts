import { Component, OnInit } from '@angular/core';
import { PmService } from '../pm.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  oneProduct={
    title:'',
    price:'',
    image:''
  };

  errorMsg=[];

  constructor(private _pmService: PmService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    console.log('product-detail component is running now...');
    this._route.params.subscribe(
      (params: Params) => {
        console.log('product-detail got params[id] =',params['id']);
        this.getOneProductFromService(params['id']);
      }
    );
  }

  getOneProductFromService(id:string){
    console.log('Running product-detail->getOneProductFromSerivice...');
    console.log('id=',id);
    let obs = this._pmService.getOne(id);
    obs.subscribe(
      data=>{
        console.log('Got data back from getOne in service:',data);
        this.oneProduct=data['data'];
        console.log('component check oneProduct.title=',this.oneProduct.title);
        console.log('component check oneProduct.price=',this.oneProduct.price);
        console.log('component check oneProduct.image=',this.oneProduct.image);
      }
    )
  }

  onUpdate(id:string){
    console.log('onUpdate check oneProduct.title=',this.oneProduct.title);
    console.log('onUpdate check oneProduct.price=',this.oneProduct.price);
    console.log('onUpdate check oneProduct.image=',this.oneProduct.image);
    this.errorMsg=[]; // reset it before next query call

    let obs = this._pmService.updateOne(id,this.oneProduct);
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
        console.log('updated new product:',data);
        this.goList();
        console.log('passed goList');
        } 
      }
    );
  }

  onClickDelete(id:string){
    console.log('onClickDelete is running...');
    let obs=this._pmService.deleteOne(id);
    obs.subscribe(
      data=>{
        console.log('deleted one product tests tests tests:',data);
        this.goList();
      });

  }

  goList(){
    console.log('Inside goList...');
    this._router.navigate(['/products/list']);
    console.log('End of goList...');
  }
}
