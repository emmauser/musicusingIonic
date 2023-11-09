import { Component, OnInit } from '@angular/core';
import {NativeAudio} from '@capacitor-community/native-audio'

@Component({
  selector: 'app-playmusic',
  templateUrl: './playmusic.page.html',
  styleUrls: ['./playmusic.page.scss'],
})
export class PlaymusicPage implements OnInit {
  final:number=0;
 music:any;
 music1:any;
 path:string='';
 charging :boolean=true;
 volume:number=0.5;
 currentPosition: number = 0;
 isPlaying = false;
isPause=false;
duration:any
  constructor() { }
 
  ngOnInit() {
    this.music=localStorage.getItem("item");
    this.music1=JSON.parse(this.music);
    this.load();
    this.play();
    this.loop();
    this.stop();
    this.stop();
    this.volup();
    this.voldown();
    this.loop();
    this.unload();
    
  }
  async load() {
    NativeAudio.preload({
      assetId: 'locko',
      assetPath: "file:///storage/emulated/0/Documents/zik_Ing4/" +this.music1.nomFichier,
      audioChannelNum : 1 ,
      isUrl : true  
    })
      .then(() => {
        console.log('Fichier audio chargé avec succès');
      
      })
      .catch((error) => {
        console.error('Erreur lors du chargement du fichier audio :', error);
      });
      this.charging=true;
  }

 measureTimeInSeconds() {
    let seconds = 0;
  
    // Fonction pour incrémenter les secondes
    function incrementSeconds() {
      seconds++;
      console.log(`Elapsed time: ${seconds} seconds`);
    }
  
    // Appel de la fonction incrementSeconds toutes les secondes
    const intervalId = setInterval(incrementSeconds, 1000);
  
    // Exemple d'utilisation pendant 5 secondes
    setTimeout(() => {
      clearInterval(intervalId); // Arrête l'incrémentation
      console.log("Measurement stopped.");
    }, 50000); // Arrête après 5 secondes
  }
async play(){
  await NativeAudio.play({ 
     assetId: 'locko', //Identifiant unique du fichier
     });
   }
   async  stop(){
    await NativeAudio.stop({ 
     assetId: "locko"
     });
   }
    async  loop(){
    await  NativeAudio.loop({ 
      assetId: "locko"
      });
    }
    async unload() {
      NativeAudio.unload({
        assetId: 'locko',
      })
        .then(() => {
          console.log('chargement reussi');
        })
        .catch((error) => {
          console.error('Erreur pendant le chargement:', error);
        });
  
        this.charging = false;
    }
    
    volup(){

      if(this.volume < 1){
        this.volume += 0.1
        NativeAudio.setVolume({
          assetId : 'locko',
          volume : this.volume,
        });
      }
  
    }
    
    // async duration(){
    // await const reponse = await NativeAudio.getDuration({ 
    //   assetId: "locko", //Identifiant unique du fichier
    //   });
    // }
    change(){
      if(this.charging){
        NativeAudio.play({
          assetId : 'locko',
          time : this.currentPosition
        });
        this.isPlaying = false;
        this.isPause = true ;
      }
    }
    voldown(){
  
      if(this.volume > 0.1){
        this.volume =  this.volume - 0.1
        NativeAudio.setVolume({
          assetId : 'locko',
          volume : this.volume,
        });
      }
  
    }
}
