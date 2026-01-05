/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import type { CharacterRepository } from 'src/data-access/character.repository';
import { CreateCharacterDto } from 'src/domain/character.dto';
import { Character } from 'src/domain/character.entity';
import { ListCharactersQueryDto } from 'src/domain/list-characters.query.dto';

const CHARACTERS_DATABASE: any = [
  new Character('alex1', 'Alice', 'alive', 'human', new Date()),
  new Character('alex3', 'Charlie', 'alive', 'human', new Date()),
];

// characters/application/character.service.ts
@Injectable()
export class CharacterService {
  constructor(private readonly repository: CharacterRepository) {}
  createCharacter(characterDto: CreateCharacterDto): Character {
    const character = new Character(
      crypto.randomUUID(),
      characterDto.name,
      'alive',
      characterDto.type,
      new Date(),
    );
    this.repository.save(character);
    return character;
  }

  findAll(query: ListCharactersQueryDto): Character[] {
    return this.repository.findAll(query);
  }

  updateCharacter(id: string, characterDto: CreateCharacterDto): void {
    const character = this.repository.findById(id);
    // Logic to update data
    console.log(characterDto);
    this.repository.save(character as Character);
  }

  partialUpdateCharacter(
    id: string,
    characterDto: Partial<CreateCharacterDto>,
  ): Character {
    // TODO Logic to partially update a character would go here
    console.log(id);
    console.log(characterDto);
    return CHARACTERS_DATABASE[0] as Character;
  }

  deleteCharacter(id: string): void {
    this.repository.delete(id);
  }
}
