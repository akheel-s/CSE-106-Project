import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
export declare class DecksController {
    private readonly decksService;
    constructor(decksService: DecksService);
    create(createDeckDto: CreateDeckDto): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Deck[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
    update(id: string, updateDeckDto: UpdateDeckDto): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
}
