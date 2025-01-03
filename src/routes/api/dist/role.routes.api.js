"use strict";
exports.__esModule = true;
var express_1 = require("express");
var handler_1 = require("~/utils/handler");
var role_controllers_api_1 = require("~/controllers/api/role.controllers.api");
var validates_middlewares_1 = require("~/middlewares/validates.middlewares");
var authenticateToken_1 = require("~/middlewares/authenticateToken");
var ApiRoleRouter = express_1.Router();
ApiRoleRouter.use(authenticateToken_1["default"]);
ApiRoleRouter.post('/create', validates_middlewares_1.createRoleValidator, handler_1.wrapRequestHandler(role_controllers_api_1.ApiRoleCreateController));
ApiRoleRouter.patch('/edit/:id', validates_middlewares_1.editRoleValidator, handler_1.wrapRequestHandler(role_controllers_api_1.ApiRoleEditController));
ApiRoleRouter["delete"]('/delete/:id', handler_1.wrapRequestHandler(role_controllers_api_1.ApiRoleDeleteController));
ApiRoleRouter.patch('/permissions', handler_1.wrapRequestHandler(role_controllers_api_1.permissionsPatch));
exports["default"] = ApiRoleRouter;
