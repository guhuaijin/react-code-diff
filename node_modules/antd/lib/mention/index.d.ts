import * as React from 'react';
export declare type MentionPlacement = 'top' | 'bottom';
export interface MentionProps {
    prefixCls?: string;
    suggestionStyle?: React.CSSProperties;
    suggestions?: Array<any>;
    onSearchChange?: (value: string, trigger: string) => any;
    onChange?: (contentState: any) => any;
    notFoundContent?: any;
    loading?: boolean;
    style?: React.CSSProperties;
    defaultValue?: any;
    value?: any;
    className?: string;
    multiLines?: boolean;
    prefix?: string | string[];
    placeholder?: string;
    getSuggestionContainer?: (triggerNode: Element) => HTMLElement;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;
    onSelect?: (suggestion: string, data?: any) => any;
    readOnly?: boolean;
    disabled?: boolean;
    placement?: MentionPlacement;
}
export interface MentionState {
    suggestions?: Array<any>;
    focus?: Boolean;
}
export default class Mention extends React.Component<MentionProps, MentionState> {
    static getMentions: any;
    static defaultProps: {
        prefixCls: string;
        notFoundContent: string;
        loading: boolean;
        multiLines: boolean;
        placement: string;
    };
    static Nav: any;
    static toString: any;
    static toContentState: any;
    private mentionEle;
    constructor(props: MentionProps);
    componentWillReceiveProps(nextProps: MentionProps): void;
    onSearchChange: (value: string, prefix: string) => any;
    onChange: (editorState: any) => void;
    defaultSearchChange(value: String): void;
    onFocus: (ev: React.FocusEvent<HTMLElement>) => void;
    onBlur: (ev: React.FocusEvent<HTMLElement>) => void;
    focus: () => void;
    mentionRef: (ele: any) => void;
    render(): JSX.Element;
}
