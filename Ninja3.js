class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    console.log("11")
  }
  sayName(){
    console.log(`My name is ${this.name}`);
  }
  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  }
  drinkSake(){
    this.health += 10;
  }
}
class Sensai extends Ninja{
  constructor(name){
    super(name);
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("Wisdom");
  }
}

const ninja1 = new Ninja("Kyle");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensai = new Sensai("Will");
sensai.speakWisdom();
sensai.showStats();
