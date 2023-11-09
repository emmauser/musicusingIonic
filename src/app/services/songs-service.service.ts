import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsServiceService {

  constructor( private http:HttpClient) { }
  getAllSongs(){
    return this.http.get("assets/RessourcesJson/Songs.json");
  }
  // getListOfEtudiants(){
  //   return this.http.get("assets/etudiant.json");
  // }
}
