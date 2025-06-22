import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, forkJoin } from 'rxjs';
import { environment } from 'src/app/environment';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('fadeInSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
    trigger('listStagger', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger(100, [
            animate(
              '300ms ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = environment.api.pokemon;
  private urlName: string = environment.api.pokemonSpecies;

  public pokemon: any = [];
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(): void {
    this.isLoading = true;
    const id = this.activatedRoute.snapshot.params['id'];

    const pokemon$ = this.pokeApiService.apiGetPokemon(
      `${this.urlPokemon}/${id}`
    );
    const name$ = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);

    forkJoin([pokemon$, name$])
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res) => {
          this.pokemon = res ?? [];
          this.apiError = false;
        },
        error: () => {
          this.apiError = true;
          this.pokemon = [];
        },
      });
  }
}
