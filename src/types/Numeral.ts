import { Case, Category, Definiteness, Form, Gender, Number, NumeralType } from "./grammar_enums"

export type Numeral = {
  category: Category.Numeral
  form: Form
  type: NumeralType
  gender?: Gender
  number?: Number
  case?: Case
  definiteness?: Definiteness
}
