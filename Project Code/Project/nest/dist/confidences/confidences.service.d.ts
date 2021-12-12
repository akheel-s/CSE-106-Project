import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConfidenceDto } from './dto/create-confidence.dto';
import { UpdateConfidenceDto } from './dto/update-confidence.dto';
export declare class ConfidencesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createConfidenceDto: CreateConfidenceDto): import(".prisma/client").Prisma.Prisma__ConfidenceClient<import(".prisma/client").Confidence>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Confidence[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ConfidenceClient<import(".prisma/client").Confidence>;
    update(id: number, updateConfidenceDto: UpdateConfidenceDto): string;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ConfidenceClient<import(".prisma/client").Confidence>;
}
