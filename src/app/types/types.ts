export enum MockLoteriasEnum {
  MAISMILIONARIA = "maismilionaria",
  MEGASENA = "megasena",
  LOTOFACIL = "lotofacil",
  QUINA = "quina",
  LOTOMANIA = "lotomania",
  TIMEMANIA = "timemania",
  DUPLASENA = "duplasena",
  FEDERAL = "federal",
  DIADESORTE = "diadesorte",
  SUPERSETE = "supersete",
}

export const translatedLoterias: Record<MockLoteriasEnum | string, string> = {
  [MockLoteriasEnum.MAISMILIONARIA]: 'Mais Milionária',
  [MockLoteriasEnum.MEGASENA]: 'Mega Sena',
  [MockLoteriasEnum.LOTOFACIL]: 'Loto Fácil',
  [MockLoteriasEnum.QUINA]: 'Quina',
  [MockLoteriasEnum.LOTOMANIA]: 'LotoMania',
  [MockLoteriasEnum.TIMEMANIA]: 'Time Mania',
  [MockLoteriasEnum.DUPLASENA]: 'Dupla Sena',
  [MockLoteriasEnum.FEDERAL]: 'Federal',
  [MockLoteriasEnum.DIADESORTE]: 'Dia de Sorte',
  [MockLoteriasEnum.SUPERSETE]: 'Super Sete',
}

export interface Concurso {
  loteria: string;
  concurso: number;
  data: string;
  local: string;
  concursoEspecial: boolean;
  dezenasOrdemSorteio: string[];
  dezenas: string[];
  trevos: string[];
  timeCoracao: string | null;
  mesSorte: string | null;
  premiacoes: Premiacao[];
  estadosPremiados: string[];
  observacao: string;
  acumulou: boolean;
  proximoConcurso: number;
  dataProximoConcurso: string;
  localGanhadores: LocalGanhadores[];
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
}

export interface Premiacao {
  descricao: string;
  faixa: number;
  ganhadores: number;
  valorPremio: number;
}

export interface LocalGanhadores {
  ganhadores: number;
  municipio: string;
  nomeFatansiaUL: string
  posicao: number;
  serie: string;
  uf: string;
}
