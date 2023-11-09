import { Component, OnInit } from '@angular/core';
import { SongsServiceService } from 'src/app/services/songs-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.page.html',
  styleUrls: ['./artiste.page.scss'],
})
export class ArtistePage implements OnInit {
  param:String|any;
  song:any;
  Songs:any[]=[];
  temp_songs:any[]=[];
bool:boolean=true;
  constructor(private songService:SongsServiceService,private route:Router) { }
  navigate(item:any) {
    this.route.navigate(['playmusic']);
    localStorage.setItem("item",JSON.stringify(item));
  }
  ngOnInit() {
    this.param= localStorage.getItem("item");
    this.song=JSON.parse(this.param);
    console.log(this.param);
    
    this.songService.getAllSongs().subscribe((response: any) => {
      this.Songs = response.filter((song: any)=> song.nomArtiste==this.song.nomArtiste);
      this.temp_songs = response;
      setTimeout(()=>{
        this.bool=false;
      },2500)
           });
    console.log(this.Songs);
    
   
  };

     
    
  
}
  


