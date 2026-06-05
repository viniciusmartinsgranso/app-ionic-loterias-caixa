import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { LoteriasService } from "../../../services/loterias.service";
import { finalize, take } from "rxjs";
import { Concurso, MockLoteriasEnum, translatedLoterias } from "../../../types/types";

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.component.html',
  styleUrls: ['./concurso.component.scss'],
  imports: [
    IonicModule,
  ]
})
export class ConcursoComponent  implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly loteriasService: LoteriasService = inject(LoteriasService);

  concurso?: Concurso;

  loteria: MockLoteriasEnum = MockLoteriasEnum.DIADESORTE;

  concursoId: string = '';

  isLoading = false;

  translatedLoterias: Record<MockLoteriasEnum | string, string> = translatedLoterias;

  constructor() {
    this.loteria = this.route.snapshot.paramMap.get('loteria') as MockLoteriasEnum;
    this.concursoId = this.route.snapshot.paramMap.get('concurso') ?? '';
  }

  ngOnInit() {
    this.getConcurso();
  }

  getConcurso() {
    this.isLoading = true;

    this.loteriasService.getConcursoByLoteria(this.loteria, this.concursoId)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false),
      )
      .subscribe((concurso) => {
        this.concurso = concurso
      });
  }

}
