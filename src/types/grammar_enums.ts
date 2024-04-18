// besedna_vrsta
export enum Category {
  Noun = "S", // samostalnik
  Verb = "G", // glagol
  Adjective = "P", // pridevnik
  Adverb = "R", // prislov
  Pronoun = "Z", // zaimek
  Numeral = "K", // števnik
  Adposition = "D", // predlog
  Conjunction = "V", // veznik
  Particle = "L", // členek
  Interjection = "M", // medmet
  Abbreviation = "O", // okrajšava
  Residual = "N", // ostalo
  Punctuation = "U" // ločilo
}

// sklon
export enum Case {
  Nominative = "i", // imenovalnik
  Genitive = "r", // rodilnik
  Dative = "d", // dajalnik
  Accusative = "t", // tožilnik
  Locative = "m", // mestnik
  Instrumental = "o" // orodnik
}

// število
export enum Number {
  Singular = "e", // ednina
  Dual = "d", // dvojina
  Plural = "m" // množina
}

// spol
export enum Gender {
  Masculine = "m", // moški spol
  Feminine = "z", // ženski spol
  Neuter = "s" // srednji spol
}

// živost
export enum Animate {
  Yes = "d", // da/živo
  No = "n" // ne/neživo
}

// vrsta
export enum NounType {
  Common = "o", // občno_ime
  Proper = "l" // lastno_ime
}

// vrsta
export enum VerbType {
  Main = "g", // glavni
  Auxiliary = "p" // pomožni
}

// vid
export enum Aspect {
  Perfective = "d", // dovršni
  Progressive = "n", // nedovršni
  Biaspectual = "v" // dvovidski
}

// oblika
export enum VForm {
  Infinitive = "n", // nedoločnik
  Supine = "m", // določnik
  Participle = "d", // deležnik
  Present = "s", // sedanjik
  Future = "p", // prihodnjik
  Conditional = "g", // pogojnik
  Imperative = "v" // velelnik
}

// oseba
export enum Person {
  First = "p", // prva
  Second = "d", // druga
  Third = "t" // tretja
}

// nikalnost
export enum Negative {
  Yes = "d", // da/zanikani
  No = "n" // ne/nezanikani
}

// vrsta
export enum AdjectiveType {
  General = "p", // splošni
  Possessive = "s", // svojilni
  Participle = "d" // deležniški
}

// stopnja
export enum AdjectiveDegree {
  Positive = "n", // nedoločeno
  Comparative = "p", // primernik
  Superlative = "s" // presežnik
}

// določnost
export enum Definiteness {
  No = "n", // ne
  Yes = "d" // da
}

// vrsta
export enum AdverbType {
  General = "s", // splošni
  Participle = "d" // deležje
}

// stopnja
export enum AdverbDegree {
  Positive = "n", // nedoločeno
  Comparative = "r", // primernik
  Superlative = "s" // presežnik
}

// vrsta
export enum PronounType {
  Personal = "o", // osebni
  Possessive = "s", // svojilni
  Demonstrative = "k", // kazalni
  Relative = "z", // oziralni
  Reflexive = "p", // povratni
  General = "c", // celostni
  Interrogative = "v", // vprašalni
  Indefinite = "n", // nedoločni
  Negative = "l" // nikalni
}

// naslonskost
export enum Clitic {
  Yes = "k", // klitična
  Bound = "z" // navezna
}

// zapis
export enum Form {
  Digit = "a", // arabski
  Roman = "r", // rimski
  Letter = "b" // besedni
}

// vrsta
export enum NumeralType {
  Cardinal = "g", // glavni
  Ordinal = "v", // vrstilni
  Pronominal = "z", // zaimkovni
  Special = "d" // drugi
}

// vrsta
export enum ConjunctionType {
  Coordinating = "p", // priredni
  Subordinating = "d" // podredni
}

// vrsta
export enum ResidualType {
  Foreign = "j", // tujejezično
  Typo = "t", // tipkarska
  Web = "w", // splet
  Emo = "e", // emo
  Hashtag = "h", // ključnik
  At = "a", // afna
  Program = "p" // program
}
