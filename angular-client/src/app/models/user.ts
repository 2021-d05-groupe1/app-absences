import { Role } from './role';
export class User {
  id: number;
  login: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  congesPyesRestants: number;
  rttRestants: number;
  role: Role;
}