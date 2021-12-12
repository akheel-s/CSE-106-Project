"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlashcardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_flashcard_dto_1 = require("./create-flashcard.dto");
class UpdateFlashcardDto extends (0, swagger_1.PartialType)(create_flashcard_dto_1.CreateFlashcardDto) {
}
exports.UpdateFlashcardDto = UpdateFlashcardDto;
//# sourceMappingURL=update-flashcard.dto.js.map