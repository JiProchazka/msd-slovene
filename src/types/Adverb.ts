import { AdverbDegree, AdverbType, Category } from "./grammar_enums"

export type Adverb = {
  category: Category.Adverb
  type: AdverbType
  degree?: AdverbDegree
}
