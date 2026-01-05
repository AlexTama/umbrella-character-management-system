import { Character } from 'src/domain/character.entity';
import { ListCharactersQueryDto } from 'src/domain/list-characters.query.dto';

export interface CharacterRepository {
  save(character: Character): void;
  findAll(query: ListCharactersQueryDto): Character[];
  findById(id: string): Character | null;
  delete(id: string): void;
}
