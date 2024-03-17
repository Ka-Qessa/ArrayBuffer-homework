export class Character {
    constructor(name, level, attack, defence, health) {
        this.name = name;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.health = health;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Cannot level up a dead character');
        }
        
        this.level++;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    }
    
    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}