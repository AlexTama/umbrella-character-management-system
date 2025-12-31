export class CharacterResponseDto {
  id: string;
  name: string;
  status: 'alive' | 'infected' | 'deceased';
  type: 'human' | 'b.o.w' | 'scientist' | 'soldier';
  createdAt: Date;
}
