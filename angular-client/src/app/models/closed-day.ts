export enum Category { JOUR_FERIE, RTT_EMPLOYEUR };
export enum JourSemaine { LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE }
export class ClosedDay {
  id: number;
  date: Date;
  category: Category;
  jour: JourSemaine;
  commentaire: string;
}