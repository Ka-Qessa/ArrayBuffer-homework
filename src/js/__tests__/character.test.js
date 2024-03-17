import {
  Character
} from "../character";

describe('Character', () => {
  describe('constructor', () => {
    it('should create a character with valid parameters', () => {
      const character = new Character('Swordman', 1, 10, 5, 100);
      character.levelUp();
      expect(character.name).toBe('Swordman');
      expect(character.level).toBe(2);
      expect(character.attack).toBe(12);
      expect(character.defence).toBe(6);
      expect(character.health).toBe(100);
    });

    test('should levelUp the defence', () => {
      const character = new Character('Player')
      character.health = 0;
      expect(() => character.levelUp()).toThrowError(new Error('Cannot level up a dead character'));
    });
  })
})

describe('Character', () => {
  describe('damage', () => {
    test('should decrease the health of the character by the correct amount', () => {
      const character = new Character('Alice', 1, 10, 5, 100);
      character.damage(10);
      expect(character.health).toBe(90.5);
    });

    test('should not decrease health below 0', () => {
      const character = new Character('Bob', 1, 10, 5, 5);
      character.damage(10);
      expect(character.health).toBe(0);
    });

    test('should take into account character defence', () => {
      const character = new Character('Charlie', 1, 10, 50, 100); 
      character.damage(20);
      expect(character.health).toBe(90);
    });
  });
});