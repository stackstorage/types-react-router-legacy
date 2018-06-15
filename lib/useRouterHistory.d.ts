import { History } from "history";
import { CreateHistoryEnhancer } from "react-router-legacy";

declare const useRouterHistory: CreateHistoryEnhancer<History>;

export default useRouterHistory;
