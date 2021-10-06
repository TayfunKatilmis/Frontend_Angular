import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImages } from 'src/app/models/carImages';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carsDetail:CarDetail []=[];
  selectedBrand:number=1
  selectedColor:number=1
  filterText:string="";
  brands:Brand[]=[]
  colors:Color[]=[]
  cars:Car []=[]
  carImages:CarImages[]=[];
  currentImage:CarImages;
  imgUrl: string = 'https://localhost:44380/';

  defaultPath='https://localhost:44380'

  constructor(private carImageService:CarImageService, private toastrModule:ToastrService,private carService:CarService,private colorservice:ColorService,private brandService:BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getBrands()
      this.getColor()
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
      else if(params["brandId"] && params["colorId"]){
        this.getCarsByFilter(params['brandId'], params['colorId']);
      }
      else{
        this.getCars();
      }
    })
  }
  getCars(){
    this.toastrModule.success("Temizlendi ve Tüm arabalar listelendi.")
    this.carService.getCars().subscribe(response=>{
      this.carsDetail=response.data
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  getColor(){
    this.colorservice.getColors().subscribe(response=>{
      this.colors=response.data
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
  getCarsByFilter(brandId:number, colorId:number){
    this.toastrModule.success("Araba Listelendi")
    this.carService.getColorAndBrandFilter(brandId,colorId).subscribe(response=>{
      this.carsDetail = response.data;
    })
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
