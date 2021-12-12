import { UserflashcardsService } from './userflashcards.service';
import { CreateUserflashcardDto } from './dto/create-userflashcard.dto';
import { UpdateUserflashcardDto } from './dto/update-userflashcard.dto';
export declare class UserflashcardsController {
    private readonly userflashcardsService;
    constructor(userflashcardsService: UserflashcardsService);
    create(createUserflashcardDto: CreateUserflashcardDto): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User_Flashcard[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
    update(id: string, updateUserflashcardDto: UpdateUserflashcardDto): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
}
