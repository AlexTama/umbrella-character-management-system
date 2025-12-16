import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('characters')
export class CharactersController {
  @Get()
  getAllCharacters(): string {
    return 'List of all Umbrella characters';
  }

  @Post()
  createCharacter(): string {
    return 'New Umbrella character created';
  }

  @Put(':id')
  updateCharacter(): string {
    return 'Umbrella character updated';
  }

  @Patch(':id')
  partiallyUpdateCharacter(): string {
    return 'Umbrella character partially updated';
  }

  @Delete(':id')
  deleteCharacter(): string {
    return 'Umbrella character deleted';
  }
}
