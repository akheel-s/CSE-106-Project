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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserdecksController = void 0;
const common_1 = require("@nestjs/common");
const userdecks_service_1 = require("./userdecks.service");
const create_userdeck_dto_1 = require("./dto/create-userdeck.dto");
const update_userdeck_dto_1 = require("./dto/update-userdeck.dto");
const swagger_1 = require("@nestjs/swagger");
let UserdecksController = class UserdecksController {
    constructor(userdecksService) {
        this.userdecksService = userdecksService;
    }
    create(createUserdeckDto) {
        return this.userdecksService.create(createUserdeckDto);
    }
    findAll() {
        return this.userdecksService.findAll();
    }
    findOne(id) {
        return this.userdecksService.findOne(+id);
    }
    update(id, updateUserdeckDto) {
        return this.userdecksService.update(+id, updateUserdeckDto);
    }
    remove(id) {
        return this.userdecksService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_userdeck_dto_1.CreateUserdeckDto]),
    __metadata("design:returntype", void 0)
], UserdecksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserdecksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserdecksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_userdeck_dto_1.UpdateUserdeckDto]),
    __metadata("design:returntype", void 0)
], UserdecksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserdecksController.prototype, "remove", null);
UserdecksController = __decorate([
    (0, common_1.Controller)('userdecks'),
    (0, common_1.Controller)('userdecks'),
    (0, swagger_1.ApiTags)('userdecks'),
    __metadata("design:paramtypes", [userdecks_service_1.UserdecksService])
], UserdecksController);
exports.UserdecksController = UserdecksController;
//# sourceMappingURL=userdecks.controller.js.map