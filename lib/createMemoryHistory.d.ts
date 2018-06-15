import { History } from "history";
import { CreateHistory } from "../";

declare const createMemoryHistory: CreateHistory<History>;

export default createMemoryHistory;
