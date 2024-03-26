export function specialAttack(character) {
    const result = [];
  
    character.special.forEach((num) => {
      const {
        name,
        id,
        icon,
        description = 'Описание недоступно',
      } = num;
  
      result.push({
        name,
        id,
        icon,
        description,
      });
    });
  
    return result;
  }