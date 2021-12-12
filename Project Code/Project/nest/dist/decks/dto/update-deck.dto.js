"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeckDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_deck_dto_1 = require("./create-deck.dto");
class UpdateDeckDto extends (0, swagger_1.PartialType)(create_deck_dto_1.CreateDeckDto) {
}
exports.UpdateDeckDto = UpdateDeckDto;
//# sourceMappingURL=update-deck.dto.js.map