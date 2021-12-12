import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserflashcardDto } from './dto/create-userflashcard.dto';
import { UpdateUserflashcardDto } from './dto/update-userflashcard.dto';
export declare class UserflashcardsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserflashcardDto: CreateUserflashcardDto): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User_Flashcard[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
    update(id: number, updateUserflashcardDto: UpdateUserflashcardDto): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__User_FlashcardClient<import(".prisma/client").User_Flashcard>;
}
