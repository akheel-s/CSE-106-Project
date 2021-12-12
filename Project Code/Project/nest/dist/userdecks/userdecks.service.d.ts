import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserdeckDto } from './dto/create-userdeck.dto';
import { UpdateUserdeckDto } from './dto/update-userdeck.dto';
export declare class UserdecksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserdeckDto: CreateUserdeckDto): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User_Deck[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
    update(id: number, updateUserdeckDto: UpdateUserdeckDto): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
}
