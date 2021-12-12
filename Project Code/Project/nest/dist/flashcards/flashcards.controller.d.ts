import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
export declare class FlashcardsController {
    private readonly flashcardsService;
    constructor(flashcardsService: FlashcardsService);
    create(createFlashcardDto: CreateFlashcardDto): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Flashcard[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
    update(id: string, updateFlashcardDto: UpdateFlashcardDto): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FlashcardClient<import(".prisma/client").Flashcard>;
}
