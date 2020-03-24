import * as React from "react";

import { icon } from "../../assets/icons";
import { ErrorBoundry } from "../../services/ErrorBoundry";

export class Footer extends React.Component {
    public render() {
        return (
            <ErrorBoundry>
                <footer>
                    <icon.logo />
                </footer>
            </ErrorBoundry>
        );
    }
}
