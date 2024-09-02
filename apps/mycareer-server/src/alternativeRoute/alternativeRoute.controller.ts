import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AlternativeRouteService } from "./alternativeRoute.service";
import { AlternativeRouteControllerBase } from "./base/alternativeRoute.controller.base";

@swagger.ApiTags("alternativeRoutes")
@common.Controller("alternativeRoutes")
export class AlternativeRouteController extends AlternativeRouteControllerBase {
  constructor(protected readonly service: AlternativeRouteService) {
    super(service);
  }
}
