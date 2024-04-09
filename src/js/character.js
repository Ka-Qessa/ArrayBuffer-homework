export class Character {
    constructor(distance) {
      this.baseAttack = 100;
      this.distance = distance;
    }
  
    get stoned() {
      return this._stoned || 0;
    }
  
    set stoned(value) {
      this._stoned = value;
    }
  
    get attack() {
      let attack = this.baseAttack * (1 - (this.distance - 1) * 0.1);
      attack -= Math.log2(this.distance) * 5;
      attack -= attack * this.stoned / 100;
  
      return Math.round(attack);
    }
  }
  
  export class Magician extends Character { }
  
  export class Daemon extends Character { }
  
  