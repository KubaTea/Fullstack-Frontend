import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { CreateAnimeComponent } from './create-anime/create-anime.component';
import { FormsModule } from '@angular/forms';
import { UpdateAnimeComponent } from './update-anime/update-anime.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    CreateAnimeComponent,
    UpdateAnimeComponent,
    AnimeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
