import {
  Bowman,
  Character,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie
} from "../character";

describe('Character', () => {
  describe('constructor', () => {
    it('should create a character with valid name and type', () => {
      const character = new Bowman('Johnson', 'Bowman');
      expect(character.name).toBe('Johnson');
      expect(character.type).toBe('Bowman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(25);
      expect(character.defence).toBe(25);
    });

    test('should throw an error if name length is less than 2 or more than 10 characters', () => {
      expect(() => new Character('J', 'Bowman')).toThrow('Character name must be between 2 and 10 characters long');
      expect(() => new Character('Johnson Doen', 'Bowman')).toThrow('Character name must be between 2 and 10 characters long');
    });

    test('should throw an error if type is invalid', () => {
      expect(() => new Character('John', 'Archer')).toThrow('Invalid character type');
    });

    test('should check the class Magition', () => {
      const character = new Magician('Player', 'Magician');
      expect(character.name).toBe('Player');
      expect(character.type).toBe('Magician');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(10);
      expect(character.defence).toBe(40);
    });

    test('should check the class Swordsman', () => {
      const character = new Swordsman('Player', 'Swordsman');
      expect(character.name).toBe('Player');
      expect(character.type).toBe('Swordsman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(40);
      expect(character.defence).toBe(10);
    });

    test('should check the class Daemon', () => {
      const character = new Daemon('Player', 'Daemon');
      expect(character.name).toBe('Player');
      expect(character.type).toBe('Daemon');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(10);
      expect(character.defence).toBe(40);
    });

    test('should check the class Zombie', () => {
      const character = new Zombie('Player', 'Zombie');
      expect(character.name).toBe('Player');
      expect(character.type).toBe('Zombie');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(40);
      expect(character.defence).toBe(10);
    });

    test('should check the class Undead', () => {
      const character = new Undead('Player', 'Undead');
      expect(character.name).toBe('Player');
      expect(character.type).toBe('Undead');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(25);
      expect(character.defence).toBe(25);
    });
  });
})