import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImages } from 'src/app/models/carImages';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carsDetail:CarDetail[]=[];
  carImages:CarImages[]=[]
  currentImage:CarImages
  currentRent:boolean=false;
  defaultPath = 'https://localhost:44380';

  constructor(private carService:CarService,private carImageService:CarImageService,
    private activetedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(
      params=>{
        if (params["id"]) {
          this.getCarImages(params["id"])
          this.getCarsByCarId(params["id"])
  //Burda kaldın carId yi Carname e çevirecektin detaylar kısmının gelmesi için
        }
      }
    )
  }
  getCarsByCarId(carId:number){
    this.carService.getCarsByCarId(carId).subscribe(
      response=>{
        this.carsDetail=response.data
      }
    )
  }
  getCarImages(carId:number){
    this.carService.getCarsImagesByCarId(carId).subscribe(response=>this.carImages=response.data)
  }
  setCurrentCorrect(){
    this.currentRent=true;
  }
  getPath(){
    return this.defaultPath
  }
  getCurrentImageClass(image:CarImages){
    if (this.carImages[0]==image) {
      return "carouse1-item active"
    }
    else{
      return "carouse1-item"
    }
  }
  setCurrentImageClass(image:CarImages){
    this.currentImage=image
  }

}
