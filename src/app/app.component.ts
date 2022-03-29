import { Component } from '@angular/core';
import { Vote } from './vote';
import { VoteService } from './vote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afb4';
  votes: Vote[] = [];

  constructor(private voteService: VoteService) {
    this.voteService.getVotes().subscribe(vs => {
      this.votes = vs;
      console.log(`votes: ${JSON.stringify(this.votes)}`);
    });
  }

  onClick() {
    console.log(`onClick()`);
    const vote: Vote = { id: '', storyId: 'story-1', points: 1 };
    this.voteService.addVote(vote);
  }
}
