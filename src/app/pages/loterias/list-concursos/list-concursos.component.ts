import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { finalize, map, Observable, take } from "rxjs";
import { LoteriasService } from "../../../services/loterias.service";
import { IonicModule } from "@ionic/angular";
import { AsyncPipe } from "@angular/common";
import { Concurso, MockLoteriasEnum, translatedLoterias } from "../../../types/types";

@Component({
  selector: 'app-list-concursos',
  templateUrl: './list-concursos.component.html',
  styleUrls: ['./list-concursos.component.scss'],
  imports: [
    IonicModule,
    AsyncPipe
  ]
})
export class ListConcursosComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly router: Router = inject(Router);

  private readonly loteriasService: LoteriasService = inject(LoteriasService);

  concursos$: Observable<Concurso[]> = new Observable<Concurso[]>();

  loteria: MockLoteriasEnum = MockLoteriasEnum.FEDERAL;

  isLoading = false;

  translatedLoterias: Record<MockLoteriasEnum, string> = translatedLoterias;

  constructor() {
    this.loteria = this.route.snapshot.paramMap.get('loteria') as MockLoteriasEnum;
  }

  ngOnInit() {
    this.getConcursos();
  }

  getConcursos() {
    this.isLoading = true;

    this.concursos$ = this.loteriasService.getLoteria(this.loteria)
      .pipe(
        take(1),
        map((concursos) => concursos.slice(0, 5)),
        finalize(() => this.isLoading = false),
      );
  }

  goToConcurso(concurso: number) {
    this.router.navigate([concurso], {
      relativeTo: this.route
    });
  }
}
