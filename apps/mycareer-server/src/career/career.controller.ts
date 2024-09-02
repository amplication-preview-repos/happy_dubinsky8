import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CareerService } from "./career.service";
import { CareerControllerBase } from "./base/career.controller.base";

@swagger.ApiTags("careers")
@common.Controller("careers")
export class CareerController extends CareerControllerBase {
  constructor(protected readonly service: CareerService) {
    super(service);
  }
}
