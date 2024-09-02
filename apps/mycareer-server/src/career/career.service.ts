import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CareerServiceBase } from "./base/career.service.base";

@Injectable()
export class CareerService extends CareerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
