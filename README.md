# MSD-Slovene

## Slovenian Language Morphosyntactic Descriptions Parser

**JOS morphosyntactic specifications for Slovene  
3.4. List of Morphosyntactic Descriptions**  
[https://nl.ijs.si/jos/msd/html-en/msd.index.msds.html](https://nl.ijs.si/jos/msd/html-en/msd.index.msds.html)

### Available methods:

- parseMsdCode
- parseNoun
- parseVerb
- parseAdjective
- parseAdverb
- parsePronoun
- parseNumeral
- parseAdposition
- parseConjunction
- parseParticle
- parseInterjection
- parseAbbreviation
- parseResidual
- parsePunctuation

### Grammatical Parts of Speech

(exported also as types)

- Abbreviation
- Adjective
- Adposition
- Adverb
- Conjunction
- Interjection
- Numeral
- Particle
- Pronoun
- Punctuation
- Residual
- Substantive
- Verb

### Grammatical Features

(exported also as types)

- Animate
- Case
- Category
- Gender
- Number
- NounType
- Negative
- Person
- VForm
- Aspect
- VerbType
- AdjectiveType
- Definiteness
- AdjectiveDegree
- AdverbType
- AdverbDegree
- PronounType
- Clitic
- NumeralType
- Form
- ConjunctionType
- ResidualType

## Usage

```typescript
const msd = parseMsdCode("Somei");
console.log(msd);

// output:
//{
//  category: 'S',
//  data: {
//    category: 'S',
//    type: 'o',
//    gender: 'm',
//    number: 'e',
//    case: 'i',
//    animate: undefined
//  }
//}
```
