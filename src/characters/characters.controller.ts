import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CharacterService } from './characters.service';
import { CreateCharacterDto } from 'src/domain/character.dto';
import { CharacterResponseDto } from 'src/domain/character.response.dto';
import { ListCharactersQueryDto } from 'src/domain/list-characters.query.dto';
import { CharacterMapper } from 'src/domain/character.mapper';

// TODO: Move to a constants file
const API_VERSION = '1';

@Controller('api/characters')
@ApiTags('Characters')
export class CharactersController {
  constructor(private readonly characterService: CharacterService) {}

  // Get filter characters by pagination
  @Get()
  @Version(API_VERSION)
  getAllCharacters(
    @Query() query: ListCharactersQueryDto,
  ): CharacterResponseDto[] {
    const characters = this.characterService.findAll(query);
    return characters.map((character) =>
      CharacterMapper.toResponseDto(character),
    );
  }
  @Post()
  @Version(API_VERSION)
  createCharacter(
    @Body() characterDto: CreateCharacterDto,
  ): CharacterResponseDto {
    return this.characterService.createCharacter(characterDto);
  }

  @Put(':id')
  @Version(API_VERSION)
  updateCharacter(
    @Body() characterDto: CreateCharacterDto,
    @Param('id') id: string,
  ): void {
    this.characterService.updateCharacter(id, characterDto);
  }

  @Patch(':id')
  @Version(API_VERSION)
  partiallyUpdateCharacter(
    @Body() characterDto: Partial<CreateCharacterDto>,
    @Param('id') id: string,
  ): CharacterResponseDto {
    return this.characterService.partialUpdateCharacter(id, characterDto);
  }

  @Delete(':id')
  @Version(API_VERSION)
  deleteCharacter(@Param('id') id: string): void {
    this.characterService.deleteCharacter(id);
  }
}
