export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string;
  front_default: string;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  sprites: Sprites;
}
