import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarImages } from '../models/carImages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl= 'https://localhost:44380/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarrename"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarsByColor(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?Id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrand(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?Id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColorName(name:string):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorname?name="+name;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarsByBrandName(name:string):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandname?name="+name;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarsImagesByCarId(carId:number):Observable<ListResponseModel<CarImages>>{
    let newPath =this.apiUrl+"carImages/getcarlistbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath)
  }
  getCarsByCarId(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbycarid?id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
