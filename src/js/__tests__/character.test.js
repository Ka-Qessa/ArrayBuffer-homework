import { Character } from "../character";

describe('Character', () => {
describe('constructor', () => {
it('should create a character with valid name and type', () => {
const character = new Character('Johnson', 'Bowman');
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
});

  describe('constructor', () => {
  it('should create a character with valid name and type', () => {
  const character = new Character('Alice', 'Magician');
  expect(character.name).toBe('Alice');
  expect(character.type).toBe('Magician');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  });
});

  describe('constructor', () => {
  it('should create a character with valid name and type', () => {
  const character = new Character('Michael', 'Swordsman');
  expect(character.name).toBe('Michael');
  expect(character.type).toBe('Swordsman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  });
});
});