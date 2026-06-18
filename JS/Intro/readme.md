## What Are JavaScript Variables

A variable is what refers to something using something else.
Eg.
when we say x=26 26 is X and x is 26

## Declaring Variables in JavaScript
We use:
let - *when the value will change*
const 



    let x=26;
    let age=50;
    const fruit = "cherry";


## Rules for Naming Variables
1. The only characters that can be used are letters, digits, underscores and dollar signs
2. Variable names cannot start with numbers-Only letters, underscore(_) or dollar sign ($)
3. Spaces are not allowed in variable names
4. It is not advisable to use JavaScript keywords as variable names. However is need be they can follow the format *_let, $let*
5. Variable name are case sensitive.
*Valid variable names*
` let age = 18;
    let _item = "pen";
    const $discount = 10;`
    
	*Invalid variable names*
	`let 1st_item = "book";
	let let = 10;
	let first name = "Alice`;
	

## Variable Naming Styles
 1. **Pascal Case (JS)**
	 	 (The *First* letter of each word is capital) 
	 	 eg`FirstName,
	 	 ClassGrade`
 2. **Camel Case [Recommended in JS]**
	 (First letter of each word is capital-*Apart from the first word*)
	 eg.`lastName, dateOfBirth`
 3. **Snake Case (Commonly used in Python)**
	 (Uses underscore)
	 eg. `date_of_birth, country_of_origin`

## Summary

 - We never use var declaring variables.
 - Variables are named using letters, digits , underscores and dollar signs with no spaces in between.
 - There are three common naming styles but *camelCase* is the most recommended.


## Primitive Variables
These are variables that don't change eg.
`Strings eg. <"Alice">,
Numbers eg. <"26">,
Boolean <which are either 'true' or 'false'>,
Null <which is used to represent intentional absence of a value>,
Undefined <which should not be used but instead left to JS to represent a variable the has no value>.`

## Ways to create a string variable

 1. Using double quotes ("")
 2. Using single quotes ('')
 3. Using back strings (``)
 

Difference between null and undefined
**Null** means that a variable has deliberately been given no value.
**Undefined** means that a variable has not yet been assigned.
 
