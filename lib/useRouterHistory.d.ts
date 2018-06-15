import { History } from "history";
import { CreateHistoryEnhancer } from "../";

declare const useRouterHistory: CreateHistoryEnhancer<History>;

export default useRouterHistory;
