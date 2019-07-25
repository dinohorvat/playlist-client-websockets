import {Component, OnInit} from '@angular/core';
import {PlaylistService} from './services/playlist.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-wsockets';

  response: Observable<any>;
  currentlyPlaying: string;
  constructor(private playlistService: PlaylistService) {}

  public ngOnInit(): void {
    this.response = this.playlistService.currentDocument;
    this.playlistService.currentlyPlaying.subscribe((res) => {
      console.log('currentlyPlaginy', res);
      this.currentlyPlaying = res;
    });
    console.log(this.currentlyPlaying);

    this.response.subscribe((res) => {
      console.log('socketResponse', res);
    });
  }

  public sendMessage() {
    this.playlistService.getDocument('123444');
  }

  public startPlaylist() {
    this.playlistService.startPlaylist();
  }

  public continuePlaylist() {
    this.playlistService.continuePlaylist();
  }

  public nextItem() {
    this.playlistService.next();
  }

  public previousItem() {
    this.playlistService.previous();
  }

  public pausePlaylist() {
    this.playlistService.pause();
  }

  public stopPlaylist() {
    this.playlistService.stopPlaylist();
  }
}
