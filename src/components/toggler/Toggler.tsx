import React from "react";

import { ErrorBoundry } from "../../services/ErrorBoundry";
import { ITogglerProps } from "./ITogglerProps";

export class Toggler extends React.Component<ITogglerProps> {

    public render() {

        const { idLeft, idRight, leftLabel, name, onChange, rightLabel, title, toggle } = this.props;

        return (
            <ErrorBoundry>
                <div className="searchFilter">
                    {title} &nbsp; &nbsp;
                    <div className="switchField">
                        <input
                            type="radio"
                            id={idLeft}
                            name={name}
                            value={leftLabel}
                            onChange={onChange}
                            checked={!toggle}
                        />
                        <label htmlFor={idLeft}>{leftLabel}</label>

                        <input
                            type="radio"
                            id={idRight}
                            name={name}
                            value={rightLabel}
                            onChange={onChange}
                            checked={toggle}
                        />
                        <label htmlFor={idRight}>{rightLabel}</label>
                    </div>
                </div>
            </ErrorBoundry >
        );
    }
}
