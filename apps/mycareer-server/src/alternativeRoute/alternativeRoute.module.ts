import { Module } from "@nestjs/common";
import { AlternativeRouteModuleBase } from "./base/alternativeRoute.module.base";
import { AlternativeRouteService } from "./alternativeRoute.service";
import { AlternativeRouteController } from "./alternativeRoute.controller";
import { AlternativeRouteResolver } from "./alternativeRoute.resolver";

@Module({
  imports: [AlternativeRouteModuleBase],
  controllers: [AlternativeRouteController],
  providers: [AlternativeRouteService, AlternativeRouteResolver],
  exports: [AlternativeRouteService],
})
export class AlternativeRouteModule {}
