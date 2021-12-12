"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserdeckDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_userdeck_dto_1 = require("./create-userdeck.dto");
class UpdateUserdeckDto extends (0, swagger_1.PartialType)(create_userdeck_dto_1.CreateUserdeckDto) {
}
exports.UpdateUserdeckDto = UpdateUserdeckDto;
//# sourceMappingURL=update-userdeck.dto.js.map