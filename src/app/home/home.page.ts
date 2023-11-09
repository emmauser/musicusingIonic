import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { SongsServiceService } from '../services/songs-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categorie:any[]=[];
  Songs :any[]=[];
  bool:boolean=true;

  songsofCategorie(item:number){
    localStorage.setItem("item",JSON.stringify(item));
    this.router.navigate(['songsparcategorie']);
  }

  navigate(item :any){
    this.router.navigate(['artiste']);
    localStorage.setItem("item",JSON.stringify(item));
  }
  navigation(item:any){
    this.router.navigate(['playmusic']);
    localStorage.setItem("item",JSON.stringify(item));
  }
  constructor(private router:Router,private categorieService:CategorieService,private SongService :SongsServiceService) {}
  ngOnInit() {
    this.categorieService.getAllCategories().subscribe((response:any)=>{
      this.categorie=response;
      setTimeout(()=>{
        this.bool=false;
      },2500)
       ;  
     });
    this.SongService.getAllSongs().subscribe((response:any)=>{
      this.Songs=response;
      
  
     });
  }
 


}
