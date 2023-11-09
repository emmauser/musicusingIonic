import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SongsServiceService } from 'src/app/services/songs-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  Songs:any[]=[];
  bool:boolean=true;

  constructor(private songService:SongsServiceService,private router:Router) { }
  eltalbum(item:any){
   this.router.navigate(['elt-album']);
   localStorage.setItem("item",JSON.stringify(item));
  }
  ngOnInit() {
    this.songService.getAllSongs().subscribe((response:any)=>{
      this.Songs=response;
      setTimeout(()=>{
        this.bool=false;
      },2500)
       ;
      
  });
  for (let index = 0; index <75; index++) {
    for (let i = index+1; i < 74 ; i++) {
     if (this.Songs[index].album.nomAlbum==this.Songs[i].album.nomAlbum) {
       this.Songs.splice(i,1);
     }
    }
  
}

  }

}
