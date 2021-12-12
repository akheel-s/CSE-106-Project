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
exports.DecksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DecksService = class DecksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createDeckDto) {
        return this.prisma.deck.create({ data: createDeckDto });
    }
    findAll() {
        return this.prisma.deck.findMany();
    }
    findOne(id) {
        return this.prisma.deck.findUnique({ where: { deck_id: id } });
    }
    update(id, updateDeckDto) {
        return this.prisma.deck.update({
            data: updateDeckDto,
            where: { deck_id: id },
        });
    }
    remove(id) {
        return this.prisma.deck.delete({ where: { deck_id: id } });
    }
};
DecksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DecksService);
exports.DecksService = DecksService;
//# sourceMappingURL=decks.service.js.map