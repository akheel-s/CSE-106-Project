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
exports.UserdecksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserdecksService = class UserdecksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createUserdeckDto) {
        return this.prisma.user_Deck.create({ data: createUserdeckDto });
    }
    findAll() {
        return this.prisma.user_Deck.findMany();
    }
    findOne(id) {
        return this.prisma.user_Deck.findUnique({ where: { userdeck_id: id } });
    }
    update(id, updateUserdeckDto) {
        return this.prisma.user_Deck.update({
            data: updateUserdeckDto,
            where: { userdeck_id: id },
        });
    }
    remove(id) {
        return this.prisma.user_Deck.delete({ where: { userdeck_id: id } });
    }
};
UserdecksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserdecksService);
exports.UserdecksService = UserdecksService;
//# sourceMappingURL=userdecks.service.js.map