import { Aspect, Category, Gender, Negative, Number, Person, VForm, VerbType } from "./grammar_enums"

export type Verb = {
  category: Category.Verb
  type: VerbType
  aspect?: Aspect
  vform: VForm
  person?: Person
  number?: Number
  gender?: Gender
  negative?: Negative
}
