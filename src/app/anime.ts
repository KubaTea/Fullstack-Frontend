export class Anime {
    id: number | undefined;
    title: string;
    episodes: number;
    dateOfRelease: string;

    constructor(title: string, episodes: number, dateOfRelease: string) {
        this.title = title;
        this.episodes = episodes;
        this.dateOfRelease = dateOfRelease;
    }

    // constructor(id: number, title: string, episodes: number, dateofrelease: string) {
    //     this.id = id;
    //     this.title = title;
    //     this.episodes = episodes;
    //     this.dateofrelease = dateofrelease;
    // }
}
