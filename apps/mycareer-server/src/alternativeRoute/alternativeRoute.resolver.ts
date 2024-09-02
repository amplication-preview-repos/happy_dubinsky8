import * as graphql from "@nestjs/graphql";
import { AlternativeRouteResolverBase } from "./base/alternativeRoute.resolver.base";
import { AlternativeRoute } from "./base/AlternativeRoute";
import { AlternativeRouteService } from "./alternativeRoute.service";

@graphql.Resolver(() => AlternativeRoute)
export class AlternativeRouteResolver extends AlternativeRouteResolverBase {
  constructor(protected readonly service: AlternativeRouteService) {
    super(service);
  }
}
