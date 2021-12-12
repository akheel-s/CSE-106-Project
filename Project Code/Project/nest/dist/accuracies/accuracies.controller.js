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
exports.AccuraciesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accuracies_service_1 = require("./accuracies.service");
const create_accuracy_dto_1 = require("./dto/create-accuracy.dto");
const update_accuracy_dto_1 = require("./dto/update-accuracy.dto");
let AccuraciesController = class AccuraciesController {
    constructor(accuraciesService) {
        this.accuraciesService = accuraciesService;
    }
    create(createAccuracyDto) {
        return this.accuraciesService.create(createAccuracyDto);
    }
    findAll() {
        return this.accuraciesService.findAll();
    }
    findOne(id) {
        return this.accuraciesService.findOne(+id);
    }
    update(id, updateAccuracyDto) {
        return this.accuraciesService.update(+id, updateAccuracyDto);
    }
    remove(id) {
        return this.accuraciesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_accuracy_dto_1.CreateAccuracyDto]),
    __metadata("design:returntype", void 0)
], AccuraciesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccuraciesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccuraciesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_accuracy_dto_1.UpdateAccuracyDto]),
    __metadata("design:returntype", void 0)
], AccuraciesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccuraciesController.prototype, "remove", null);
AccuraciesController = __decorate([
    (0, common_1.Controller)('accuracies'),
    (0, swagger_1.ApiTags)('accuracies'),
    __metadata("design:paramtypes", [accuracies_service_1.AccuraciesService])
], AccuraciesController);
exports.AccuraciesController = AccuraciesController;
//# sourceMappingURL=accuracies.controller.js.map