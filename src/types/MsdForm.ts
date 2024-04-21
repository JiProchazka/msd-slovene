import { Abbreviation } from "./Abbreviation";
import { Adjective } from "./Adjective";
import { Adposition } from "./Adposition";
import { Adverb } from "./Adverb";
import { Conjunction } from "./Conjunction";
import { Interjection } from "./Interjection";
import { Numeral } from "./Numeral";
import { Particle } from "./Particle";
import { Pronoun } from "./Pronoun";
import { Punctuation } from "./Punctuation";
import { Residual } from "./Residual";
import { Substantive } from "./Substantive";
import { Verb } from "./Verb";
import { Category } from "./grammar_enums";

export type MsdForm = {
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
};
