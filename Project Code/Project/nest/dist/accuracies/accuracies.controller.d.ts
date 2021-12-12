import { AccuraciesService } from './accuracies.service';
import { CreateAccuracyDto } from './dto/create-accuracy.dto';
import { UpdateAccuracyDto } from './dto/update-accuracy.dto';
export declare class AccuraciesController {
    private readonly accuraciesService;
    constructor(accuraciesService: AccuraciesService);
    create(createAccuracyDto: CreateAccuracyDto): import(".prisma/client").Prisma.Prisma__AccuracyClient<import(".prisma/client").Accuracy>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Accuracy[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AccuracyClient<import(".prisma/client").Accuracy>;
    update(id: string, updateAccuracyDto: UpdateAccuracyDto): string;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AccuracyClient<import(".prisma/client").Accuracy>;
}
