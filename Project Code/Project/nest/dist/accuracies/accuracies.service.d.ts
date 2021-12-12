import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccuracyDto } from './dto/create-accuracy.dto';
import { UpdateAccuracyDto } from './dto/update-accuracy.dto';
export declare class AccuraciesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAccuracyDto: CreateAccuracyDto): import(".prisma/client").Prisma.Prisma__AccuracyClient<import(".prisma/client").Accuracy>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Accuracy[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AccuracyClient<import(".prisma/client").Accuracy>;
    update(id: number, updateAccuracyDto: UpdateAccuracyDto): string;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AccuracyClient<import(".prisma/client").Accuracy>;
}
