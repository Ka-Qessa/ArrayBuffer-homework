[![Build status](https://ci.appveyor.com/api/projects/status/vo51uucu8sxcg972?svg=true)](https://ci.appveyor.com/project/Ka-Qessa/classes-homework)


Описание
Реализуйте описанную иерархию классов: класс Character является родительским для всех остальных, 6 дочерних классов Bowerman, Swordsman, Magician, Daemon, Undead, Zombie от него наследуются, сами задавая свои характеристики.

Свойства, которые должны быть у объектов класса Character:

name - имя
type - тип
health - уровень жизни
level - уровень персонажа
attack - атака
defence - защита
Конструктор класса должен соответствовать следующим требованиям:

name - строка, min - 2 символа, max - 10
type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
В случае, если передаются некорректные значения, должна выбрасываться ошибка (throw new Error(...)).

В вашей функции автоматически должны устанавливаться значения следующих полей:

health: 100
level: 1
Атака/защита:
Bowman: 25/25
Swordsman: 40/10
Magician: 10/40
Undead: 25/25
Zombie: 40/10
Daemon: 10/40