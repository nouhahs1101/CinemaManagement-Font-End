import { projection } from './role copy';
import { cinema } from './cinema';

export class  salle {
    id:number
    name:string
    image:string
    nombrePlace:number
   projections: projection[]
   cinema:cinema
    }