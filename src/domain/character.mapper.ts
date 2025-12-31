import { Character } from './character.entity';
import { CharacterResponseDto } from './character.response.dto';

export class CharacterMapper {
  static toResponseDto(character: Character): CharacterResponseDto {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      type: character.type,
      createdAt: character.createdAt,
    };
  }
}
