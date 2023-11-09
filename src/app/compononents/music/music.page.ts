import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsServiceService } from 'src/app/services/songs-service.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  bool:boolean=true;
  Songs:any[]=[];
  temp_songs:any[]=[];
  constructor(private router :Router,private songService:SongsServiceService) { }
  navigate(){
    this.router.navigate(['allmusic']);
  }
  navigate1(item:any){
    this.router.navigate(['artiste']);
    localStorage.setItem("item",JSON.stringify(item));
  }
  navigate3(){
    this.router.navigate(['albums']);
  }

  ngOnInit() {
    this.songService.getAllSongs().subscribe((response:any)=>{
      this.Songs=response;
      this.temp_songs=response;
      setTimeout(()=>{
        this.bool=false;
      },2500)
       ;      for (let index = 0; index <this.Songs.length; index++) {
           for (let i = index+1; i < this.Songs.length ; i++) {
            if (this.Songs[index].nomArtiste==this.Songs[i].nomArtiste) {
              this.Songs.splice(i,1);
            }
           }
         
      }
      
  });

}
}
