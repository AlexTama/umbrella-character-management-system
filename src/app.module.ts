import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { CharacterService } from './characters/characters.service';

@Module({
  imports: [CharactersModule],
  controllers: [AppController],
  providers: [AppService, CharacterService],
})
export class AppModule {}
