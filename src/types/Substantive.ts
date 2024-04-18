import { Category, Case, Number, Gender, Animate, NounType } from "./grammar_enums"

export type Substantive = {
  category: Category.Noun
  case: Case
  number: Number
  gender: Gender
  type: NounType
  animate?: Animate
}
