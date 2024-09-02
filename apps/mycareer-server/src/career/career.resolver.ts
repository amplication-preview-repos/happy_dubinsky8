import * as graphql from "@nestjs/graphql";
import { CareerResolverBase } from "./base/career.resolver.base";
import { Career } from "./base/Career";
import { CareerService } from "./career.service";

@graphql.Resolver(() => Career)
export class CareerResolver extends CareerResolverBase {
  constructor(protected readonly service: CareerService) {
    super(service);
  }
}
