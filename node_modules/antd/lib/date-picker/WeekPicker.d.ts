import * as React from 'react';
import * as moment from 'moment';
declare class WeekPicker extends React.Component<any, any> {
    static defaultProps: {
        format: string;
        allowClear: boolean;
    };
    static getDerivedStateFromProps(nextProps: any): {
        value: any;
    } | null;
    private input;
    constructor(props: any);
    weekDateRender: (current: any) => JSX.Element;
    handleChange: (value: moment.Moment | null) => void;
    clearSelection: (e: React.MouseEvent<HTMLElement>) => void;
    focus(): void;
    blur(): void;
    saveInput: (node: any) => void;
    render(): JSX.Element;
}
export default WeekPicker;
