import { Component, inject } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { LoteriasService } from "../../../services/loterias.service";
import { AsyncPipe } from "@angular/common";
import { MockLoteriasEnum, translatedLoterias } from "../../../types/types";
import { Router } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: 'app-loterias',
  templateUrl: './loterias-home.page.html',
  styleUrls: ['./loterias-home.page.scss'],
  imports: [
    IonicModule,
    AsyncPipe
  ]
})
export class LoteriasHomePage {

  private loteriasService: LoteriasService = inject(LoteriasService);

  private router: Router = inject(Router);

  private readonly filteredLoterias = [
    MockLoteriasEnum.MAISMILIONARIA,
    MockLoteriasEnum.MEGASENA,
    MockLoteriasEnum.LOTOFACIL,
    MockLoteriasEnum.QUINA,
    MockLoteriasEnum.LOTOMANIA,
  ];

  readonly loterias$ = this.loteriasService.getLoterias().pipe(
    map((loterias) => loterias.filter((loteria) => this.filteredLoterias.includes(loteria))),
  );

  translatedLoterias: Record<MockLoteriasEnum, string> = translatedLoterias;

  getLoteria(loteria: MockLoteriasEnum) {
    this.router.navigateByUrl('loterias/' + loteria);
  }
}
