import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-anime',
  templateUrl: './update-anime.component.html',
  styleUrls: ['./update-anime.component.css']
})
export class UpdateAnimeComponent implements OnInit{
  id: number | undefined;

  anime: Anime = new Anime('', 0, '');

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.animeService.getAnimeById(this.id).subscribe(data => {
      this.anime = data;
    }, error => console.log(error));
  }

  updateAnime(){
    this.animeService.updateAnime(this.id, this.anime).subscribe(data=>{
      console.log(data);
      this.anime = new Anime(this.anime.title, this.anime.episodes, this.anime.dateOfRelease);
    }, error => console.log(error));
  }

  goToAnimeList(){
    this.router.navigate(['/animeList'])
  }

  onSubmit(){
    this.updateAnime();
    this.goToAnimeList();
  }
}
