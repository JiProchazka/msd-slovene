import { Category, ResidualType } from "./grammar_enums"

export type Residual = {
  category: Category.Residual
  type?: ResidualType
}
