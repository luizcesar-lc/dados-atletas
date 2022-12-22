import { Atletas } from './classe';

let carlos = new Atletas(
  'Cesar Abascal',
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
);

carlos.calculaCategoria();
