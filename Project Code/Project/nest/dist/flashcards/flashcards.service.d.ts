import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
export declare class FlashcardsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFlashcardDto: CreateFlashcardDto): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Flashcard[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
    update(id: number, updateFlashcardDto: UpdateFlashcardDto): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
}
