"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserdecksModule = void 0;
const common_1 = require("@nestjs/common");
const userdecks_service_1 = require("./userdecks.service");
const userdecks_controller_1 = require("./userdecks.controller");
let UserdecksModule = class UserdecksModule {
};
UserdecksModule = __decorate([
    (0, common_1.Module)({
        controllers: [userdecks_controller_1.UserdecksController],
        providers: [userdecks_service_1.UserdecksService]
    })
], UserdecksModule);
exports.UserdecksModule = UserdecksModule;
//# sourceMappingURL=userdecks.module.js.map