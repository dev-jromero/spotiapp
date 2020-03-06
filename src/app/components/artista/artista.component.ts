import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any [] = [];

  loadingArtist: boolean;

  constructor( private spotify:SpotifyService, private router: ActivatedRoute ) {

    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    }); 
   }


  ngOnInit(): void {
  }
  
  getArtista( id: string ){

        this.loadingArtist = true;
        this.spotify.getArtista( id ).subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loadingArtist = false;
        })
  }

  getTopTracks( id:string ){
      this.spotify.getTopTracks(id).subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }
}
