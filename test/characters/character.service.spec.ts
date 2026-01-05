import { Test, TestingModule } from '@nestjs/testing';
import { CharacterService } from 'src/characters/characters.service';
import { CharacterRepository } from 'src/data-access/character.repository';
import { CreateCharacterDto } from 'src/domain/character.dto';

describe('Character Service', () => {
  let service: CharacterService;
  let repository: jest.Mocked<CharacterRepository>;
  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CharacterService],
    }).compile();

    repository = {
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      delete: jest.fn(),
    };
    service = app.get<CharacterService>(CharacterService);
  });

  describe('Given a user interaction', () => {
    describe('When the user calls the save option', () => {
      it('Then should save a human character', () => {
        // TODO ... implement logic
        const dto: CreateCharacterDto = {
          name: 'Alexander Tamayo',
          type: 'human',
        };
        const character = service.createCharacter(dto);
        expect(character.name).toBe('Alexander Tamayo');
        expect(character.status).toBe('Alive');
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(repository.save).toHaveBeenCalledWith(character);
      });

      it('Then should save a B.O.W character', () => {
        // TODO ... implement logic here
      });

      it('Then should save a scientist character', () => {
        // TODO ... implement logic here
      });
    });
  });
});
