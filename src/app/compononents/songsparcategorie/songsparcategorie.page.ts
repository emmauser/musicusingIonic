import { Component, OnInit } from '@angular/core';
import { SongsServiceService } from 'src/app/services/songs-service.service';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { JsonPipe } from '@angular/common';
// import { Plugins } from '@capacitor/core';
// const { Filesystem } = Plugins;
@Component({
  selector: 'app-songsparcategorie',
  templateUrl: './songsparcategorie.page.html',
  styleUrls: ['./songsparcategorie.page.scss'],
})
export class SongsparcategoriePage implements OnInit {
  result: any;
  categorie: any[] = [];
  Songs: any[] = [];
  final: number = 1;
  path: string | any;
  start: number | any;
  end: number | any;
  temp_songs: any[] = [];
  bool :boolean=true;
  // SongCategorie:any[]=[];
  chaine: String | any;

  constructor(private songService: SongsServiceService, private route: Router, private CategorieService: CategorieService) { }
  searchItems(ev: any) {
    console.log(ev);

    let val = ev.target.value; //on récupère la saisie de l’utilisateur
    this.Songs = this.temp_songs.filter((item: any) => {
      let txtNom = item.Artiste + ' ' + item.titre;
      return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }
  
  navigate(item:any) {
    this.route.navigate(['playmusic']);
    localStorage.setItem("item",JSON.stringify(item));
  }

 


 
  ngOnInit() {
    this.chaine = localStorage.getItem("item");
    this.final = parseInt(this.chaine);
    // console.log(this.final);
    this.songService.getAllSongs().subscribe((response: any) => {
      this.Songs = response.filter((song: any)=> song.idCategorie==this.final);
      this.temp_songs = response;
      setTimeout(()=>{
        this.bool=false;
      },2500)
           });




    this.chaine = localStorage.getItem("item");
    this.final = parseInt(this.chaine);
   

  }

}
