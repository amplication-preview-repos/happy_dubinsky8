import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlternativeRouteServiceBase } from "./base/alternativeRoute.service.base";

@Injectable()
export class AlternativeRouteService extends AlternativeRouteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
