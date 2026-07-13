/*
    Objects are a complex datatype.
        ->Its a datatype that houses other datatypes

        In real life you can't really express data using a single variable

        ->{
        key:value,
        key:value,
        key:value,
        }//block

    Key/property=><number or a string><unique>
    Value=>any other datatype<boolean,string,null,object,function>
    If a value is a function<method>
*/

/*

//Objects -> object oriented programming
//Functions -> functional programming
    Why objects are usefull.
    1. If you want to represent a complex datatype

*/

const student_name = "Samson";
const student_age = 24;
const student_phone = "254732342342";
const parent_name = "Maggy";
const parent_email = "maggy@gmail.com";

/*
    You can have one variable that represents the whole thing.
*/

const student = {
   name: "Paulette Hellen",
   age: 34,
   "Favourite Quote": "Backwards Never forward ever",
   parent: {
      name: "Maggnus",
      phone: "2547324324",
   },
   pet: {},
   34: "Favourite Number",
   sayMyName: function () {
      console.log(`Paulette`);
   },
   announce: function () {
      alert(`Paulette is gracing you with her presence`);
   },
};

/*
    Create an object called car.
    Properties: name,model,top_speed,color
    Engine information:<object>cylinder 
    Manufacturer:<object> name,aka,country
    Number as a property<key>
    alert_info:function that when called prints information of the car as an alert 
    fun fact<key>
    is_it_a_classic<property>:value<boolean>
*/

const car = {
   name: "BMW i3",
   generation: "2026, Neue Klasse",
   model: "i3 50 xDrive ",
   edition: 1,
   top_speed: 200,
   color: "Red",
   engine: {
      cylinder: "none",
      type: "Fully electric",
      motors: "Dual electric motors",
      tech: "Sixth-generation",
      battery: 108.7,
   },
   manufacturer: {
      name: "Bayerische Motoren Werke",
      aka: "Bavarian Motor Works",
      country: "Germany",
   },
   900: "WLTP-rated range on a single charge",
   "fun fact":
      "It's only a preview of the next-generation, eighth-gen BMW 3 Series, just in fully electric form first.",
   is_it_a_classic: false,
   info: function () {
      alert(
         `This ${car.name} is a ${this.model} model and \n Fun fact: ${car["fun fact"]}`,
      );
   },
};
//car.info();

//Confirm that you are able to print the object and its type

console.log(`Car datatype ${typeof car}`);
console.log(car);
console.log("--using console.log(table)--");
console.table(car);

/*
   Access individual parts of the object
   1.dot notation->does not work for everything
                 ->Doesn't work on numbers, string with spaces/starting with a number or symbols
                 ->can only access properties that follow variable naming rules
   2.bracket notation-> works for everything but is not appealing
                     ->**You can access properties using variables

   For each property access it using both dot and bracket notation

   Hint for nested properties use car.manufacturer.name or car["manufacturer"]["name"]
*/

console.log(`Name is ${car.name} its type is ${typeof car.name}`);
console.log(
   `Generation is ${car.generation} its type is ${typeof car.generation}`,
);
console.log(`Model is ${car.model} its type is ${typeof car.model}`);
console.log(`Edition is ${car.edition} its type is ${typeof car.edition}`);
console.log(
   `Top_speed is ${car.top_speed} its type is ${typeof car.top_speed}`,
);
console.log(`Color is ${car.color} its type is ${typeof car.color}`);
console.log(`Engine is ${car.engine} its type is ${typeof car.engine}`);
console.log(
   `Manufacturer is ${car.manufacturer} its type is ${typeof car.manufacturer}`,
);
console.log(
   `is_it_a_classicis ${car.is_it_a_classic} its type is ${typeof car.is_it_a_classic}`,
);
console.log(`Info is ${car.info} its type is ${typeof car.info}`);

//bracket notation
let v1 = "model";
console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`);

console.log(`Model is ${car["model"]} its type is ${typeof car["model"]}`);
console.log(`900is ${car["900"]} its type is ${typeof car["900"]}`);
console.log(
   `Fun Fact is ${["fun fact"]} its type is ${typeof car["fun fact"]}`,
);

console.log(
   `Engine-cylinder is ${car["engine"]["cylinder"]}} its type is ${typeof car["engine"]["cylinder"]}`,
);
console.log(
   `Engine-type is ${car["engine"]["type"]} its type is ${typeof car["engine"]["type"]}`,
);
console.log(
   `Engine-motors is ${car["engine"]["motors"]} its type is ${typeof car["engine"]["motors"]}`,
);
console.log(
   `Engine-tech is ${car["engine"]["tech"]} its type is ${typeof car["engine"]["tech"]}`,
);
console.log(
   `Engine-battery is ${car["engine"]["battery"]} its type is ${typeof car["engine"]["battery"]}`,
);

for (const key in car) {
   const value = car[key];
   console.log(`car ${key} is ${value}`);
}



/*
   Update object data
   Before you can update, you need to be able to access the data
   
*/
