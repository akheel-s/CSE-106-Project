import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
export declare class DecksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDeckDto: CreateDeckDto): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Deck[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
    update(id: number, updateDeckDto: UpdateDeckDto): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__DeckClient<import(".prisma/client").Deck>;
}
