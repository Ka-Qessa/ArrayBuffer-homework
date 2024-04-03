export class Character {
    constructor(name) {
      this.name = name;
    }
  }
  
  export class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Character is already in the team');
      }
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach((character) => {
        if (this.members.has(character)) {
          throw new Error('Characteris already in the team');
        }
        this.members.add(character);
      });
    }
  
    toArray() {
      return Array.from([...this.members]);
    }
  }
  
  /*Описание
  
  Метод add должен добавлять выбранного персонажа в команду (объект класса Character). При этом такой объект уже существует в команде - дублирования происходить не должно, должна генерироваться ошибка.
  
  Метод addAll должен иметь возможность добавлять произвольное количество персонажей (используйте rest-parameters) в команду. При этом задвоения быть не должно, ошибка генерироваться не должна.
  
  Метод toArray должен производить конвертацию Set в массив.*/