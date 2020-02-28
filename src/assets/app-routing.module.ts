import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ManageComponent } from 'src/app/pages/manage/manage.component';
import { ReviewsComponent } from 'src/app/pages/reviews/reviews.component';
import { DemosComponent } from 'src/app/pages/demos/demos.component';
import { OffersComponent } from 'src/app/pages/offers/offers.component';
import { LoginComponent } from 'src/app/common/login/login.component';
import { UserComponent } from 'src/app/common/user/user.component';



const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"demos",component:DemosComponent},
  {path:"offers",component:OffersComponent},
  {path:"manage",component:ManageComponent},
  {path:"manageuser",component:LoginComponent},
  {path:"register",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
