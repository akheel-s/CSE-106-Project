import { UserdecksService } from './userdecks.service';
import { CreateUserdeckDto } from './dto/create-userdeck.dto';
import { UpdateUserdeckDto } from './dto/update-userdeck.dto';
export declare class UserdecksController {
    private readonly userdecksService;
    constructor(userdecksService: UserdecksService);
    create(createUserdeckDto: CreateUserdeckDto): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User_Deck[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
    update(id: string, updateUserdeckDto: UpdateUserdeckDto): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__User_DeckClient<import(".prisma/client").User_Deck>;
}
