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
  top_speed: "200 km/h",
  color: "Red",
  engine: {
    cylinder: "none",
    type: "Fully electric",
    motors: "Dual electric motors",
    tech: "Sixth-generation",
    battery: "108.7-kWh",
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
car.info();
