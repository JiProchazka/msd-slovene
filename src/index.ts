import { stringToEnumValue } from "./lib/utils";
import { Abbreviation } from "./types/Abbreviation";
import { Adjective } from "./types/Adjective";
import { Adposition } from "./types/Adposition";
import { Adverb } from "./types/Adverb";
import { Conjunction } from "./types/Conjunction";
import { Interjection } from "./types/Interjection";
import { Numeral } from "./types/Numeral";
import { Particle } from "./types/Particle";
import { Pronoun } from "./types/Pronoun";
import { Punctuation } from "./types/Punctuation";
import { Residual } from "./types/Residual";
import { Substantive } from "./types/Substantive";
import { Verb } from "./types/Verb";
import {
  Animate,
  Case,
  Category,
  Gender,
  Number,
  NounType,
  Negative,
  Person,
  VForm,
  Aspect,
  VerbType,
  AdjectiveType,
  Definiteness,
  AdjectiveDegree,
  AdverbType,
  AdverbDegree,
  PronounType,
  Clitic,
  NumeralType,
  Form,
  ConjunctionType,
  ResidualType,
} from "./types/grammar_enums";

function parseNoun(msdCode: string): Substantive {
  return {
    category: Category.Noun,
    type: stringToEnumValue(NounType, msdCode[1])!,
    gender: stringToEnumValue(Gender, msdCode[2])!,
    number: stringToEnumValue(Number, msdCode[3])!,
    case: stringToEnumValue(Case, msdCode[4])!,
    animate: stringToEnumValue(Animate, msdCode[5]),
  };
}

function parseVerb(msdCode: string): Verb {
  return {
    category: Category.Verb,
    type: stringToEnumValue(VerbType, msdCode[1])!,
    aspect: stringToEnumValue(Aspect, msdCode[2]),
    vform: stringToEnumValue(VForm, msdCode[3])!,
    person: stringToEnumValue(Person, msdCode[4]),
    number: stringToEnumValue(Number, msdCode[5]),
    gender: stringToEnumValue(Gender, msdCode[6]),
    negative: stringToEnumValue(Negative, msdCode[7]),
  };
}

function parseAdjective(msdCode: string): Adjective {
  return {
    category: Category.Adjective,
    type: stringToEnumValue(AdjectiveType, msdCode[1])!,
    degree: stringToEnumValue(AdjectiveDegree, msdCode[2])!,
    gender: stringToEnumValue(Gender, msdCode[3])!,
    number: stringToEnumValue(Number, msdCode[4])!,
    case: stringToEnumValue(Case, msdCode[5])!,
    definiteness: stringToEnumValue(Definiteness, msdCode[6])!,
  };
}

function parseAdverb(msdCode: string): Adverb {
  return {
    category: Category.Adverb,
    type: stringToEnumValue(AdverbType, msdCode[1])!,
    degree: stringToEnumValue(AdverbDegree, msdCode[2]),
  };
}

function parsePronoun(msdCode: string): Pronoun {
  return {
    category: Category.Pronoun,
    type: stringToEnumValue(PronounType, msdCode[1])!,
    person: stringToEnumValue(Person, msdCode[2]),
    gender: stringToEnumValue(Gender, msdCode[3]),
    number: stringToEnumValue(Number, msdCode[4]),
    case: stringToEnumValue(Case, msdCode[5]),
    ownerNumber: stringToEnumValue(Number, msdCode[6]),
    ownerGender: stringToEnumValue(Gender, msdCode[7]),
    clitic: stringToEnumValue(Clitic, msdCode[8]),
  };
}

function parseNumeral(msdCode: string): Numeral {
  return {
    category: Category.Numeral,
    form: stringToEnumValue(Form, msdCode[1])!,
    type: stringToEnumValue(NumeralType, msdCode[2])!,
    gender: stringToEnumValue(Gender, msdCode[3]),
    number: stringToEnumValue(Number, msdCode[4]),
    case: stringToEnumValue(Case, msdCode[5]),
    definiteness: stringToEnumValue(Definiteness, msdCode[6]),
  };
}

function parseAdposition(msdCode: string): Adposition {
  return {
    category: Category.Adposition,
    case: stringToEnumValue(Case, msdCode[1])!,
  };
}

function parseConjunction(msdCode: string): Conjunction {
  return {
    category: Category.Conjunction,
    type: stringToEnumValue(ConjunctionType, msdCode[1])!,
  };
}

function parseParticle(): Particle {
  return {
    category: Category.Particle,
  };
}

function parseInterjection(): Interjection {
  return {
    category: Category.Interjection,
  };
}

function parseAbbreviation(): Abbreviation {
  return {
    category: Category.Abbreviation,
  };
}

function parseResidual(msdCode: string): Residual {
  return {
    category: Category.Residual,
    type: stringToEnumValue(ResidualType, msdCode[1]),
  };
}

function parsePunctuation(): Punctuation {
  return {
    category: Category.Punctuation,
  };
}

function parseMsdCode(msdCode: string):
  | {
      category: Category;
      data:
        | Substantive
        | Verb
        | Adjective
        | Adverb
        | Pronoun
        | Numeral
        | Adposition
        | Conjunction
        | Particle
        | Interjection
        | Abbreviation
        | Residual
        | Punctuation;
    }
  | undefined {
  switch (msdCode[0]) {
    case "S":
      return { category: Category.Noun, data: parseNoun(msdCode) };
    case "G":
      return { category: Category.Verb, data: parseVerb(msdCode) };
    case "P":
      return { category: Category.Adjective, data: parseAdjective(msdCode) };
    case "R":
      return { category: Category.Adverb, data: parseAdverb(msdCode) };
    case "Z":
      return { category: Category.Pronoun, data: parsePronoun(msdCode) };
    case "K":
      return { category: Category.Numeral, data: parseNumeral(msdCode) };
    case "D":
      return {
        category: Category.Adposition,
        data: parseAdposition(msdCode),
      };
    case "V":
      return {
        category: Category.Conjunction,
        data: parseConjunction(msdCode),
      };
    case "L":
      return { category: Category.Particle, data: parseParticle() };
    case "M":
      return { category: Category.Interjection, data: parseInterjection() };
    case "O":
      return { category: Category.Abbreviation, data: parseAbbreviation() };
    case "N":
      return { category: Category.Residual, data: parseResidual(msdCode) };
    case "U":
      return { category: Category.Punctuation, data: parsePunctuation() };
    default:
      return undefined;
  }
}

export {
  Animate,
  Case,
  Category,
  Gender,
  Number,
  NounType,
  Negative,
  Person,
  VForm,
  Aspect,
  VerbType,
  AdjectiveType,
  Definiteness,
  AdjectiveDegree,
  AdverbType,
  AdverbDegree,
  PronounType,
  Clitic,
  NumeralType,
  Form,
  ConjunctionType,
  ResidualType,
  parseMsdCode,
  parseNoun,
  parseVerb,
  parseAdjective,
  parseAdverb,
  parsePronoun,
  parseNumeral,
  parseAdposition,
  parseConjunction,
  parseParticle,
  parseInterjection,
  parseAbbreviation,
  parseResidual,
  parsePunctuation,
  Abbreviation,
  Adjective,
  Adposition,
  Adverb,
  Conjunction,
  Interjection,
  Numeral,
  Particle,
  Pronoun,
  Punctuation,
  Residual,
  Substantive,
  Verb,
};
