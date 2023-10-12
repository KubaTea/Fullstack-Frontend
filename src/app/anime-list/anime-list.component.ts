import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit{
  animeList: Anime[] = [];

  constructor(private animeService: AnimeService, private router: Router){}

  ngOnInit(): void {
    this.getAnime();
  }

  private getAnime(){
    this.animeService.getAnimeList().subscribe(response =>{
      if (response.status === 200){
        const rawData = response.body;
        if (rawData !== null) {
          this.animeList = rawData;
        } else {
          console.error('Response data is null.');
        }
      } else {
        console.error('HTTP Error:', response.status);
      }
    });
  }

  animeDetails(id: number | undefined){
    this.router.navigate(['anime-details', id]);
  }

  updateAnime(id: number | undefined){
    this.router.navigate(['update-anime', id]);
  }

  deleteAnime(id: number | undefined){
    this.animeService.deleteAnime(id).subscribe(data => {
      console.log(data);
      this.getAnime();
    })
  }
}
