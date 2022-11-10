import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures = ['man.png', 'woman.png', 'emoji.png', 'penguin.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
