import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): string;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    update(id: number, updateUserDto: UpdateUserDto): void;
    remove(id: number): string;
}
