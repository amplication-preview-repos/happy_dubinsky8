import { CareerWhereInput } from "./CareerWhereInput";
import { CareerOrderByInput } from "./CareerOrderByInput";

export type CareerFindManyArgs = {
  where?: CareerWhereInput;
  orderBy?: Array<CareerOrderByInput>;
  skip?: number;
  take?: number;
};
