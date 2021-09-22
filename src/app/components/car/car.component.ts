import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImages } from 'src/app/models/carImages';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carsDetail:CarDetail []=[];
  cars:Car []=[]
  carImages:CarImages[]=[];
  currentImage:CarImages;
  imgUrl: string = 'https://localhost:44380/';

  defaultPath='https://localhost:44380'

  constructor(private carImageService:CarImageService, private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsbyColor(params["colorId"])
      }
      else if (params["brandId"]) {
        this.getCarsbyBrand(params["brandId"])
      }
      else if (params["colorName"]) {
        this.getCarsByColorName(params["colorName"])
      }
      else if (params["brandName"]) {
        this.getCarsByBrandName(params["brandName"])
      }
      else{
        this.getCars();
      }
    })
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.carsDetail=response.data
    })
  }
  getCarsbyColor(id:number){
    this.carService.getCarsByColor(id).subscribe(response=>{
      this.carsDetail=response.data
    })
  }
  getCarsbyBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.carsDetail=response.data
    })
  }
  getCarsByColorName(name:string){
    this.carService.getCarsByColorName(name).subscribe(response=>{
      this.carsDetail=response.data
    })
  }
  getCarsByBrandName(name:string){
    this.carService.getCarsByBrandName(name).subscribe(response=>{
      this.carsDetail=response.data
    })
  }
  getCarImages(carId:number){
    this.carService.getCarsImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
    }
    )
  }
  getPath(){
    return this.defaultPath;
  }

  getButtonClass(image:CarImages){
    if (this.carImages[0]==image) {
      return "active"
    }
    else{
      return ""
    }
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
