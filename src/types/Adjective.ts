import { AdjectiveType, Case, Category, Definiteness, AdjectiveDegree, Gender, Number } from "./grammar_enums"

export type Adjective = {
  category: Category.Adjective
  type: AdjectiveType
  degree: AdjectiveDegree
  gender: Gender
  number: Number
  case: Case
  definiteness: Definiteness
}
