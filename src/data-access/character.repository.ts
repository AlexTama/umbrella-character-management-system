import { Character } from 'src/domain/character.entity';

export interface CharacterRepository {
  save(character: Character): void;
  findAll(): Character[];
  findById(id: string): Character | null;
  delete(id: string): void;
}
