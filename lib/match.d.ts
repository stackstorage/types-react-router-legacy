import { History } from "history";
import { Basename, LocationDescriptor, ParseQueryString, RouteConfig, StringifyQuery } from "../";

interface MatchArgs {
    routes: RouteConfig;
    basename?: Basename;
    parseQueryString?: ParseQueryString;
    stringifyQuery?: StringifyQuery;
}

interface MatchLocationArgs extends MatchArgs {
    location: LocationDescriptor;
    history?: History;
}

interface MatchHistoryArgs extends MatchArgs {
    location?: LocationDescriptor;
    history: History;
}

export type MatchCallback = (error: any, redirectLocation: Location, renderProps: any) => void;

export default function match(args: MatchLocationArgs | MatchHistoryArgs, cb: MatchCallback): void;

