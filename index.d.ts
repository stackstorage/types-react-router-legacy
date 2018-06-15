// Type definitions for react-router 3.0
// Project: https://github.com/rackt/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Yuichi Murata <https://github.com/mrk21>, Václav Ostrožlík <https://github.com/vasek17>, Nathan Brown <https://github.com/ngbrown>, Alex Wendland <https://github.com/awendland>, Kostya Esmukov <https://github.com/KostyaEsmukov>, John Reilly <https://github.com/johnnyreilly>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/* Replacement from old history definitions */
export interface HistoryOptions {
    getCurrentLocation?(): Location;
    getUserConfirmation?(message: string, callback: (result: boolean) => void): void;
    pushLocation?(nextLocation: Location): void;
    replaceLocation?(nextLocation: Location): void;
    go?(n: number): void;
    keyLength?: number;
}

export type CreateHistory<T> = (options?: HistoryOptions) => T;
export type CreateHistoryEnhancer<T> = (createHistory: CreateHistory<T>) => CreateHistory<T>;

export {
    Basename,
    ChangeHook,
    EnterHook,
    InjectedRouter,
    LeaveHook,
    Location,
    LocationDescriptor,
    ParseQueryString,
    RouteComponent,
    RouteComponents,
    RouteComponentProps,
    RouteConfig,
    RoutePattern,
    RouterProps,
    RouterState,
    StringifyQuery,
    Query
} from "./lib/Router";
export { LinkProps } from "./lib/Link";
export { IndexLinkProps } from "./lib/IndexLink";
export { RouteProps, PlainRoute } from "./lib/Route";
export { IndexRouteProps } from "./lib/IndexRoute";
export { RedirectProps } from "./lib/Redirect";
export { IndexRedirectProps } from "./lib/IndexRedirect";

/* components */
export { default as Router } from "./lib/Router";
export { default as Link } from "./lib/Link";
export { default as IndexLink } from "./lib/IndexLink";
export { default as withRouter } from "./lib/withRouter";

/* components (configuration) */
export { default as IndexRedirect } from "./lib/IndexRedirect";
export { default as IndexRoute } from "./lib/IndexRoute";
export { default as Redirect } from "./lib/Redirect";
export { default as Route } from "./lib/Route";

/* utils */
export { createRoutes } from "./lib/RouteUtils";
export { default as RouterContext } from "./lib/RouterContext";
export { routerShape, locationShape } from "./lib/PropTypes";
export { default as match } from "./lib/match";
export { default as useRouterHistory } from "./lib/useRouterHistory";
export { formatPattern } from "./lib/PatternUtils";
export { default as applyRouterMiddleware } from "./lib/applyRouterMiddleware";

/* histories */
export { default as browserHistory } from "./lib/browserHistory";
export { default as hashHistory } from "./lib/hashHistory";
export { default as createMemoryHistory } from "./lib/createMemoryHistory";
