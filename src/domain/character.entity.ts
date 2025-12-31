// domain/character.entity.ts
export class Character {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly status: 'alive' | 'infected' | 'deceased',
    readonly type: 'human' | 'b.o.w' | 'scientist' | 'soldier',
    readonly createdAt: Date,
  ) {}
}
