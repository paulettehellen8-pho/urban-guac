## What Are JavaScript Variables

A variable is what refers to something using something else.
Eg.
when we say x=26 26 is X and x is 26

## Declaring Variables in JavaScript

We use:
let - _when the value will change_
const

    let x=26;
    let age=50;
    const fruit = "cherry";

## Rules for Naming Variables

1.  The only characters that can be used are letters, digits, underscores and dollar signs
2.  Variable names cannot start with numbers-Only letters, underscore(\_) or dollar sign ($)
3.  Spaces are not allowed in variable names
4.  It is not advisable to use JavaScript keywords as variable names. However is need be they can follow the format _\_let, $let_
5.  Variable name are case sensitive.
    _Valid variable names_
    ` let age = 18;
    let _item = "pen";
    const $discount = 10;`
        *Invalid variable names*
        `let 1st_item = "book";
        let let = 10;
        let first name = "Alice`;

## Variable Naming Styles

1.  **Pascal Case (JS)**
    (The _First_ letter of each word is capital)
    eg`FirstName,
 	 ClassGrade`
2.  **Camel Case [Recommended in JS]**
    (First letter of each word is capital-_Apart from the first word_)
    eg.`lastName, dateOfBirth`
3.  **Snake Case (Commonly used in Python)**
    (Uses underscore)
    eg. `date_of_birth, country_of_origin`

## Summary

- We never use var declaring variables.
- Variables are named using letters, digits , underscores and dollar signs with no spaces in between.
- There are three common naming styles but _camelCase_ is the most recommended.

## Primitive Variables

These are variables that don't change eg.
`Strings eg. <"Alice">,
Numbers eg. <"26">,
Boolean <which are either 'true' or 'false'>,
Null <which is used to represent intentional absence of a value>,
Undefined <which should not be used but instead left to JS to represent a variable the has no value>.`

## Ways to create a string variable

1.  Using double quotes ("")
2.  Using single quotes ('')
3.  Using back strings (``)

Difference between null and undefined
**Null** means that a variable has deliberately been given no value.
**Undefined** means that a variable has not yet been assigned.

## Tax Calculator

- Paye (pay as you earn) gross salary band.
- NSSF Tier 1 and Tier 2 ->max()-employer pays some amount
- SHIF (2.75% of gross)
- Housing Levy (2.75% of gross)-employer doubles.
- Personal Relief 2400/-

Show the employer and the Employee the tax they need to pay

## Break Down

- Get the amount the person earns<while loop=>force the person to enter the correct salary>
- Paye Calculation
- NSSF
- SHIF/SHA
- Housing Levy

**1. Gross Salary**

- Use a prompt -> Enter your gross salary
- Check if its a number
- Check if its a number greater than 0.
- Loop to ensure that we get the correct gross salary

**2. NSSF Calculation**

- Tier 1 -> For the first 9000k is 6%
- Tier 2 > from 9k to 108k -> 6%
- Max is 6,480

* !note\* the employer matches the employee contribution
  combined will be
  employee + employer

Case where you earn 80K
9000*6%=540
71K*6%=4260
total - 4800
employer ->4800
