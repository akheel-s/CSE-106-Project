import { ConfidencesService } from './confidences.service';
import { CreateConfidenceDto } from './dto/create-confidence.dto';
import { UpdateConfidenceDto } from './dto/update-confidence.dto';
export declare class ConfidencesController {
    private readonly confidencesService;
    constructor(confidencesService: ConfidencesService);
    create(createConfidenceDto: CreateConfidenceDto): import(".prisma/client").Prisma.Prisma__ConfidenceClient<import(".prisma/client").Confidence>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Confidence[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ConfidenceClient<import(".prisma/client").Confidence>;
    update(id: string, updateConfidenceDto: UpdateConfidenceDto): string;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ConfidenceClient<import(".prisma/client").Confidence>;
}
