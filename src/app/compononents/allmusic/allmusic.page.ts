import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsServiceService } from 'src/app/services/songs-service.service';


@Component({
  selector: 'app-allmusic',
  templateUrl: './allmusic.page.html',
  styleUrls: ['./allmusic.page.scss'],
})
export class AllmusicPage implements OnInit {
  Songs :any[]=[];
  temp_songs:any[]=[];
  bool:boolean=true;
  constructor(private songService:SongsServiceService,private route:Router) { }
  navigate(item:any){
    localStorage.setItem("item",JSON.stringify(item));
    this.route.navigate(['playmusic']);
  }
  searchItems(ev: any) {
    
    let val = ev.target.value; //on récupère la saisie de l’utilisateur
    this.Songs= this.temp_songs.filter((item:any) => {
    let txtNom = item.Artiste + ' ' + item.titre;
    return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
    }
  ngOnInit() {
    this.songService.getAllSongs().subscribe((response:any)=>{
      this.Songs=response;
      this.temp_songs=response;
      setTimeout(()=>{
        this.bool=false;
      },2500)
       ;
});
    
  }

}
