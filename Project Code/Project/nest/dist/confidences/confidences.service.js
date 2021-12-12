"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfidencesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConfidencesService = class ConfidencesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createConfidenceDto) {
        return this.prisma.confidence.create({ data: createConfidenceDto });
    }
    findAll() {
        return this.prisma.confidence.findMany();
    }
    findOne(id) {
        return this.prisma.confidence.findUnique({ where: { confidence_id: id } });
    }
    update(id, updateConfidenceDto) {
        return `This action updates a #${id} confidence`;
    }
    remove(id) {
        return this.prisma.confidence.delete({ where: { confidence_id: id } });
    }
};
ConfidencesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfidencesService);
exports.ConfidencesService = ConfidencesService;
//# sourceMappingURL=confidences.service.js.map