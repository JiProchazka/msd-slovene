import { Case, Category, Clitic, Gender, Number, Person, PronounType } from "./grammar_enums"

export type Pronoun = {
  category: Category.Pronoun
  type: PronounType
  person?: Person
  gender?: Gender
  number?: Number
  case?: Case
  ownerNumber?: Number
  ownerGender?: Gender
  clitic?: Clitic
}
