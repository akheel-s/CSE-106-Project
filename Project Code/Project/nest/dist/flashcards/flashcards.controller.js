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
exports.FlashcardsController = void 0;
const common_1 = require("@nestjs/common");
const flashcards_service_1 = require("./flashcards.service");
const create_flashcard_dto_1 = require("./dto/create-flashcard.dto");
const update_flashcard_dto_1 = require("./dto/update-flashcard.dto");
const swagger_1 = require("@nestjs/swagger");
let FlashcardsController = class FlashcardsController {
    constructor(flashcardsService) {
        this.flashcardsService = flashcardsService;
    }
    create(createFlashcardDto) {
        return this.flashcardsService.create(createFlashcardDto);
    }
    findAll() {
        return this.flashcardsService.findAll();
    }
    findOne(id) {
        return this.flashcardsService.findOne(+id);
    }
    update(id, updateFlashcardDto) {
        return this.flashcardsService.update(+id, updateFlashcardDto);
    }
    remove(id) {
        return this.flashcardsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flashcard_dto_1.CreateFlashcardDto]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flashcard_dto_1.UpdateFlashcardDto]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "remove", null);
FlashcardsController = __decorate([
    (0, common_1.Controller)('flashcards'),
    (0, swagger_1.ApiTags)('flashcards'),
    __metadata("design:paramtypes", [flashcards_service_1.FlashcardsService])
], FlashcardsController);
exports.FlashcardsController = FlashcardsController;
//# sourceMappingURL=flashcards.controller.js.map