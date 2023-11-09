import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor( private http:HttpClient) { 
  
  }
  getAllCategories(){
    return this.http.get("assets/RessourcesJson/Categories.json");
  }
}
