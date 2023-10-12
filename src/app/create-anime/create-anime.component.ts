import { Component } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-anime',
  templateUrl: './create-anime.component.html',
  styleUrls: ['./create-anime.component.css']
})
export class CreateAnimeComponent {
  anime: Anime = new Anime(
    '', 0, ''
  );
  constructor(private animeService: AnimeService, private router: Router){ }

  ngOnInit(): void{
  }

  saveAnime(){
    this.animeService.createAnime(this.anime).subscribe( data =>{
      console.log(data);
      this.goToAnimeList();
    },
    error => console.log(error));
  }

  goToAnimeList(){
    this.router.navigate(['/animeList'])
  }

  onSubmit(){
    console.log(this.anime);
    this.saveAnime();
  }
}
