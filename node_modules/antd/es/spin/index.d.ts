import * as React from 'react';
export declare type SpinSize = 'small' | 'default' | 'large';
export declare type SpinIndicator = React.ReactElement<any>;
export interface SpinProps {
    prefixCls?: string;
    className?: string;
    spinning?: boolean;
    style?: React.CSSProperties;
    size?: SpinSize;
    tip?: string;
    delay?: number;
    wrapperClassName?: string;
    indicator?: SpinIndicator;
}
export interface SpinState {
    spinning?: boolean;
    notCssAnimationSupported?: boolean;
}
declare class Spin extends React.Component<SpinProps, SpinState> {
    static defaultProps: {
        prefixCls: string;
        spinning: boolean;
        size: "default" | "small" | "large";
        wrapperClassName: string;
    };
    static propTypes: {
        prefixCls: any;
        className: any;
        spinning: any;
        size: any;
        wrapperClassName: any;
        indicator: any;
    };
    static setDefaultIndicator(indicator: React.ReactNode): void;
    debounceTimeout: number;
    delayTimeout: number;
    constructor(props: SpinProps);
    isNestedPattern(): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: SpinProps): void;
    render(): JSX.Element;
}
export default Spin;
