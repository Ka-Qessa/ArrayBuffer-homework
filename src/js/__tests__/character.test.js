import {
    Character,
    Team
  } from "../character";
  
  describe('Team', () => {
    let team;
    let character1;
    let character2;
    let character3;
  
    beforeEach(() => {
      team = new Team();
      character1 = new Character('Character 1');
      character2 = new Character('Character 2');
      character3 = new Character('Character 3');
    });
  
    test('adding a character to the team', () => {
      team.add(character1);
      expect(team.toArray()).toEqual([character1]);
    });
  
    test('adding multiple characters to the team', () => {
      team.addAll(character1, character2, character3);
      expect(team.toArray()).toEqual([character1, character2, character3]);
    });
  
    test('adding a character that is already in the team', () => {
      team.add(character1);
      expect(() => team.add(character1)).toThrow('Character is already in the team');
    });
  
    test('adding multiple characters with one that is already in the team', () => {
      team.add(character1);
      expect(() => team.addAll(character1, character2)).toThrow('Characteris already in the team');
    });
  
  });