import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharacterService } from './characters.service';

@Module({
  controllers: [CharactersController],
  providers: [CharacterService],
})
export class CharactersModule {}
