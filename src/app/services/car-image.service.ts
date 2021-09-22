import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl= "https://localhost:44341/";
  constructor(private httpClient:HttpClient) { }
  getImagePath(imagePath:string){
    return this.apiUrl+imagePath
  }
}