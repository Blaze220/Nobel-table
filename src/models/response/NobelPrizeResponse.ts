import { TlaureateBasic } from "./LaureatesResponse";

export type translation = {
  en: string;
  se: string;
  no: string;
};

export interface NobelPrize {
  awardYear: number;
  category: translation;
  categoryFullName: translation;
  dateAwarded: string;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  topMotivation: translation;
  laureates: Array<TlaureateBasic>;
}
type nobelPrizesMeta = {
  offset: number;
  limit: number;
  minimum: number;
  nobelPrizeYear: number;
  yearTo: number;
  nobelPrizeCategory: string;

  count: number;
};

export type links = {
  first: string;
  prev: string;
  self: string;
  next: string;
  last: string;
};
export interface nobelPrizesResult {
  nobelPrizes: NobelPrize[];
  meta: nobelPrizesMeta;
  links: links;
}
