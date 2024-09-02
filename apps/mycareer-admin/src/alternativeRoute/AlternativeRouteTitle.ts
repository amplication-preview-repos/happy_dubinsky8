import { AlternativeRoute as TAlternativeRoute } from "../api/alternativeRoute/AlternativeRoute";

export const ALTERNATIVEROUTE_TITLE_FIELD = "id";

export const AlternativeRouteTitle = (record: TAlternativeRoute): string => {
  return record.id?.toString() || String(record.id);
};
