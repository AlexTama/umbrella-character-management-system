import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/characters')
@ApiTags('Characters')
export class CharactersController {
  // Get filter characters by pagination
  @Get()
  @Version('1')
  getAllCharacters(@Query() query: any): string {
    console.log(query);
    // Logic to retrieve characters with pagination and filtering would go here
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
