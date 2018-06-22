import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  setup: string;
  punchline: string;

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  createJoke2() {
    this.jokeCreated.emit(new Joke(this.setup, this.punchline));
    this.setup = '';
    this.punchline = '';
  }

  ngOnInit() {
  }

}
