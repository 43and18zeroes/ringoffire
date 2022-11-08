import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { DialogAddPlayerComponent } from 'src/app/dialog-add-player/dialog-add-player.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this
      .firestore
      .collection('games')
      .doc(params['id'])
      .valueChanges()
      .subscribe((game: any) => {
        console.log('Game update', game);
        this.game.players = game.players;
        this.game.stack = game.stack;
        this.game.playedCards = game.playedCards;
        this.game.currentPlayer = game.currentPlayer;
      });
    });

  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('New card:', this.currentCard);
      console.log('game', this.game);

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }

}
