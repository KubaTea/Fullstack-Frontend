import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { CreateAnimeComponent } from './create-anime/create-anime.component';
import { UpdateAnimeComponent } from './update-anime/update-anime.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';

const routes: Routes = [
  {path: 'animeList', component: AnimeListComponent},
  {path: 'create-anime', component: CreateAnimeComponent},
  {path: '', redirectTo: 'animeList', pathMatch: 'full'},
  {path: 'update-anime/:id', component: UpdateAnimeComponent},
  {path: 'anime-details/:id', component: AnimeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
