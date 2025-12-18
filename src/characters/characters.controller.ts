import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('api/v1/characters')
export class CharactersController {
  // Get filter characters by pagination
  @Get('')
  getAllCharacters(@Query() query: any): string {
    console.log(query);
    return 'List of all Umbrella characters';
  }

  @Post()
  createCharacter(@Body() body: any): string {
    // Logic to store the new character would go here
    console.log(body);
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
