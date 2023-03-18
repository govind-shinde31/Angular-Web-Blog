import { Component, OnInit } from '@angular/core';
interface Video {
  title:string;
  src: string;
  description: string;
  uploadedDate?: Date;
  type: 'entertainment' | 'educational',
  thumbnailUrl?: string;
}
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  playlistSrc: Video[] = [{
    title: 'Opposite words in English',
    src: 'https://www.youtube.com/watch?v=3JDWR6SXSNk',
    description: 'Opposite words in English | opposite words for preschoolers | Educational video | Antonym for kids',
    type:'educational',
    thumbnailUrl:'../../assets/img/opposite.webp'
  },
  {
    title: 'Animals and their Young Ones ',
    src: 'https://www.youtube.com/watch?v=ByWy7zYAtII',
    description: 'Animals and their Young Ones - Animals & their Babies - PRINIT CHANNEL',
    type:'educational',
    thumbnailUrl:'../../assets/img/animal.webp'
  },
  {
      title: 'Phonics Song with TWO Words',
      src: 'https://www.youtube.com/watch?v=8WaWnhqWwNk',
      description: 'Phonics Song with TWO Words - A For Apple B For Ball - ABC Alphabet Song with Sounds for Children',
      type:'educational',
      thumbnailUrl:'../../assets/img/phon.webp'
    },
    {
      title: 'Rajpal Yadav Comedy Scenes',
      src: 'https://www.youtube.com/watch?v=OXu-4tujzrw',
      description: 'Rajpal Yadav Comedy Scenes {HD} - Top Comedy Scenes - Weekend Comedy Special - Indian Comedy',
      type:'entertainment',
      thumbnailUrl:'../../assets/img/head.webp'
    },
    {
      title: 'Rajpal Yadav Comedy Scenes',
      src: 'https://www.youtube.com/watch?v=m-zbIfF-RYA',
      description: 'Rajpal Yadav Comedy Scenes {HD} - Top Comedy Scenes - Weekend Comedy Special - Indian Comedy',
      type:'entertainment',
      thumbnailUrl:'../../assets/img/rajpal.webp'
    },
    {
      title: '3 Idiots Chatur Speech',
      src: 'https://www.youtube.com/watch?v=aNM0dq4gw5U&t=284s',
      description: 'Chatur Speech | Aamir Khan | R Madhavan | Sharman Joshi | Omi Vaidya | 3 Idiots Best Comedy Scene',
      type:'entertainment',
      thumbnailUrl:'../../assets/img/chatur.webp'
    },
  ];

  playlist = this.playlistSrc;

  selectedType:string = 'all';
 

  constructor() {};

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  

 
}
}