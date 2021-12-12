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
exports.UserflashcardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserflashcardsService = class UserflashcardsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createUserflashcardDto) {
        return this.prisma.user_Flashcard.create({ data: createUserflashcardDto });
    }
    findAll() {
        return this.prisma.user_Flashcard.findMany();
    }
    findOne(id) {
        return this.prisma.user_Flashcard.findUnique({
            where: { userflashcard_id: id },
        });
    }
    update(id, updateUserflashcardDto) {
        return this.prisma.user_Flashcard.update({
            data: updateUserflashcardDto,
            where: { userflashcard_id: id },
        });
    }
    remove(id) {
        return this.prisma.user_Flashcard.delete({
            where: { userflashcard_id: id },
        });
    }
};
UserflashcardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserflashcardsService);
exports.UserflashcardsService = UserflashcardsService;
//# sourceMappingURL=userflashcards.service.js.map