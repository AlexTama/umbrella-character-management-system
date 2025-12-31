/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
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
  createCharacter(characterDto: CreateCharacterDto): Character {
    const character = new Character(
      crypto.randomUUID(),
      characterDto.name,
      'alive',
      characterDto.type,
      new Date(),
    );
    return character;
  }

  findAll(query: ListCharactersQueryDto): Character[] {
    console.log(query);
    // TODO Logic to retrieve characters with pagination and filtering would go here
    // TODO: REPLACE WITH ACTUAL DATABASE CALL
    return CHARACTERS_DATABASE as Character[];
  }

  updateCharacter(id: string, characterDto: CreateCharacterDto): Character {
    // TODO Logic to update a character would go here
    console.log(id);
    console.log(characterDto);
    return CHARACTERS_DATABASE[0] as Character;
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

  // ask why its better return void intead of boolean in a delete method
  deleteCharacter(id: string): void {
    // TODO Logic to delete a character would go here
    console.log(id);
  }
}
