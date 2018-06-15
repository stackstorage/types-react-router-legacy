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
} from "react-router-legacy/Router";
export { LinkProps } from "react-router-legacy/Link";
export { IndexLinkProps } from "react-router-legacy/IndexLink";
export { RouteProps, PlainRoute } from "react-router-legacy/Route";
export { IndexRouteProps } from "react-router-legacy/IndexRoute";
export { RedirectProps } from "react-router-legacy/Redirect";
export { IndexRedirectProps } from "react-router-legacy/IndexRedirect";

/* components */
export { default as Router } from "react-router-legacy/Router";
export { default as Link } from "react-router-legacy/Link";
export { default as IndexLink } from "react-router-legacy/IndexLink";
export { default as withRouter } from "react-router-legacy/withRouter";

/* components (configuration) */
export { default as IndexRedirect } from "react-router-legacy/IndexRedirect";
export { default as IndexRoute } from "react-router-legacy/IndexRoute";
export { default as Redirect } from "react-router-legacy/Redirect";
export { default as Route } from "react-router-legacy/Route";

/* utils */
export { createRoutes } from "react-router-legacy/RouteUtils";
export { default as RouterContext } from "react-router-legacy/RouterContext";
export { routerShape, locationShape } from "react-router-legacy/PropTypes";
export { default as match } from "react-router-legacy/match";
export { default as useRouterHistory } from "react-router-legacy/useRouterHistory";
export { formatPattern } from "react-router-legacy/PatternUtils";
export { default as applyRouterMiddleware } from "react-router-legacy/applyRouterMiddleware";

/* histories */
export { default as browserHistory } from "react-router-legacy/browserHistory";
export { default as hashHistory } from "react-router-legacy/hashHistory";
export { default as createMemoryHistory } from "react-router-legacy/createMemoryHistory";
