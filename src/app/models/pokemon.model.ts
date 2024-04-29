export class Pokemon {
    name: string;
    weight: number;
    base_xp: number;
    height: number;
    abilities: string[];
    sprite_id: string;
  
    constructor(name: string, weight: number, base_xp: number, height: number,
        abilities: string[], sprite_id: string
    ) {
      this.name = name;
      this.weight = weight;
      this.base_xp = base_xp;
      this.height = height;
      this.abilities = abilities;
      this.sprite_id = sprite_id;
    }
  
  }