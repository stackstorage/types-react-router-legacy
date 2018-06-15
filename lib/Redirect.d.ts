import { ComponentClass, ClassAttributes } from "react";
import { RoutePattern, Query } from "react-router-legacy";
import { IndexRedirectProps } from "react-router-legacy/lib/IndexRedirect";

export interface RedirectProps extends IndexRedirectProps {
    from: RoutePattern;
}

type Redirect = ComponentClass<RedirectProps>;
declare const Redirect: Redirect;

export default Redirect;
