# MSD-Slovene

## Slovenian Language Morphosyntactic Descriptions Parser

**JOS morphosyntactic specifications for Slovene  
3.4. List of Morphosyntactic Descriptions**  
[https://nl.ijs.si/jos/msd/html-en/msd.index.msds.html](https://nl.ijs.si/jos/msd/html-en/msd.index.msds.html)

Available methods:

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
