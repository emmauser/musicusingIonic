import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsServiceService } from 'src/app/services/songs-service.service';

@Component({
  selector: 'app-elt-album',
  templateUrl: './elt-album.page.html',
  styleUrls: ['./elt-album.page.scss'],
})
export class EltAlbumPage implements OnInit {
Songs:any[]=[];
elt:any;
temp_songs:any[]=[];
bool :boolean=true;
chaine:any;
  constructor(private songService:SongsServiceService,private route:Router) { }
  navigate(item:any) {
    this.route.navigate(['playmusic']);
    localStorage.setItem("item",JSON.stringify(item));
  }
  ngOnInit() {
    this.songService.getAllSongs().subscribe((response:any)=>{
      this.Songs=response;
      this.temp_songs=response;
      
      this.chaine=localStorage.getItem("item");
      this.elt=JSON.parse(this.chaine);
      setTimeout(()=>{
        this.bool=false;
      },2500)
       ;
      
  });
  }

}
