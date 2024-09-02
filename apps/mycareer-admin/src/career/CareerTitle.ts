import { Career as TCareer } from "../api/career/Career";

export const CAREER_TITLE_FIELD = "id";

export const CareerTitle = (record: TCareer): string => {
  return record.id?.toString() || String(record.id);
};
