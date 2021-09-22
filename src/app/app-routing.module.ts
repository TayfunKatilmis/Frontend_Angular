import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/color/:colorName",component:CarComponent},
  {path:"cars/brand/:brandName",component:CarComponent},
  {path:"cars/carDetail/:id",component:CarDetailComponent},
  {path:"cars/:carId",pathMatch:"full",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
