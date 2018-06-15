import { History } from "history";
import { CreateHistory } from "react-router-legacy";

declare const createMemoryHistory: CreateHistory<History>;

export default createMemoryHistory;
