import { links, translation } from "./NobelPrizeResponse";

type urls = string;
export interface Ievent {
  date: string;
  place:residences;
}
export interface ItranslationWithSameas extends translation {
  sameAs: urls;
}

type IitemLinks = {
  rel	:string;
href:string;
action:string	;
types	:string;
}
type residences = {
  city: translation;
  country: translation;
  cityNow: ItranslationWithSameas;
  countryNow: ItranslationWithSameas;
  locationString: translation;
};

type entity = {
  name: translation;
  nameNow: translation;
  nativeName: string;
  city: translation;
  country: translation;
  cityNow: ItranslationWithSameas;
  countryNow: ItranslationWithSameas;
  locationString: translation;
};
type TnobelPrizes = {
  awardYear: number;
  category: translation;
  categoryFullName: translation;
  sortOrder: string;
  portion: string;
  dateAwarded: string;
  prizeStatus: string;
  motivation: translation;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  affiliations: entity;
  residences: residences
};

type Tperson = {
  knownName: translation;
  givenName: translation;
  familyName: translation;
  fullName: translation;
  fileName: string;
  penname?: string;
  gender: "female" | "male";
  birth: Ievent;
  death: Ievent;
};
export type TlaureateBasic = {
  
  id: number;
  fullName: translation;
  portion: string;
  motivation: translation;
  links: IitemLinks[];
  sortOrder:number;
  knownName?:translation

};

type Twikipedia = {
  slug: string;
  english: string;
};

type Twikidata = {
  id: string;
  url: string;
};
export interface ILauret extends Tperson {
  id: number;
  wikipedia: Twikipedia;
  wikidata: Twikidata;
  nobelPrizes: TnobelPrizes[];
  sameAs: urls;
}
type laureatesMeta={
  limit: number;
  count:number
}
export interface laureatesResult {
  laureates: ILauret[];
  meta: laureatesMeta;
  links: links;
}
