import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable()
export class PlaylistService {
  currentDocument = this.socket.fromEvent<any>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  currentlyPlaying = this.socket.fromEvent<string>('currentlyPlaying');

  constructor(private socket: Socket) { }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  stopPlaylist() {
    this.socket.emit('stop');
  }

  continuePlaylist() {
    this.socket.emit('continue');
  }

  previous() {
    this.socket.emit('previous');
  }

  next() {
    this.socket.emit('next');
  }

  pause() {
    this.socket.emit('pause');
  }

  startPlaylist() {
    const images = [
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://www.opencollege.info/wp-content/uploads/2016/02/relaxation-skills.jpg',
      'https://www.w3schools.com/w3css/img_lights.jpg',
      'http://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg',
      'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg'
    ];
    const data = {
      timer: 5000,
      images
    };
    this.socket.emit('start', data);
  }
}
