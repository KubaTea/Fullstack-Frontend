import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit{
  id: number | undefined;
  anime: Anime = new Anime(
    "", 0, ""
  );

  constructor(private route: ActivatedRoute, private animeService: AnimeService){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.anime = new Anime("", 0, "");
    this.animeService.getAnimeById(this.id).subscribe(data => {
      this.anime = data;
    });
  }
}
