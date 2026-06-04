import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Concurso, MockLoteriasEnum } from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class LoteriasService {

  private httpClient: HttpClient = inject(HttpClient);

  getLoterias(): Observable<MockLoteriasEnum[]> {
    return this.httpClient.get<MockLoteriasEnum[]>('');
  }

  getLoteria(loteria: MockLoteriasEnum): Observable<Concurso[]> {
    const route = environment.api.routes.loteria;

    return this.httpClient.get<Concurso[]>(route.replace('{loteria}', loteria));
  }

  getConcursoByLoteria(loteria: MockLoteriasEnum, concurso: string): Observable<Concurso> {
    const route = environment.api.routes.concurso;

    return this.httpClient.get<Concurso>(route.replace('{loteria}', loteria).replace('{concurso}', concurso));
  }

  getLatestLoteria(id: MockLoteriasEnum): Observable<Concurso> {
    const route = environment.api.routes.latest;

    return this.httpClient.get<Concurso>(route.replace('{loteria}', id));
  }
}
