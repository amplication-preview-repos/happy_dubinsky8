import { Module } from "@nestjs/common";
import { CareerModuleBase } from "./base/career.module.base";
import { CareerService } from "./career.service";
import { CareerController } from "./career.controller";
import { CareerResolver } from "./career.resolver";

@Module({
  imports: [CareerModuleBase],
  controllers: [CareerController],
  providers: [CareerService, CareerResolver],
  exports: [CareerService],
})
export class CareerModule {}
