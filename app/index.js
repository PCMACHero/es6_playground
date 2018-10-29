import SuperPerson from "./person";

const Bo = new SuperPerson("Bo", "heat vision");
const Sarah = new SuperPerson("Sarah", "cold vision");

Bo.talk("Hello, my name is Bo");

Sarah.talk("Hey, Bo");

Sarah.greet();

Bo.saySuperpower("laser vision");