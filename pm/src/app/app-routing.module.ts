import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {ProductcreateComponent} from './productcreate/productcreate.component';
import {CategoryComponent} from './category/category.component';
import {AllReviewsComponent} from './all-reviews/all-reviews.component';
import {AuthorComponent} from './author/author.component';
import {BrandComponent} from './brand/brand.component';
import {ReviewComponent} from './review/review.component';
import {ReviewDetailComponent} from './review-detail/review-detail.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'products', component: ProductComponent},
  { path: 'products/list', component: ProductlistComponent},
  { path: 'products/create', component: ProductcreateComponent},
  { path: 'products/edit/:id', component: ProductDetailComponent},

  /*{ path: 'products', component: ProductComponent, children: [
    { path: 'list', component: ProductlistComponent },
    { path: 'create', component: ProductcreateComponent },
    { path: 'details/:id', component: ProductDetailComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }]
  },
  { path: 'reviews', component: ReviewComponent, children: [
      { path: 'details/:id', component: ReviewDetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllReviewsComponent }]
  },*/
  {path:'', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
