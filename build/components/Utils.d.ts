/// <reference types="react" />
export interface IAutosuggestProps {
    id?: string;
    displayName?: string;
    valueName?: string;
    className?: string;
    listSuggest?: IObjectProps[] | any[];
    placeholder?: string;
    messageNoData?: string;
    maxLength?: number;
    text?: string;
    closeOnSelected?: boolean;
    closeOnEsc?: boolean;
    matchCompareCase?: boolean;
    disabled?: boolean;
    minSizeSearch?: number;
    hideSearchIcon?: boolean;
    titleSearchIcon?: string;
    titleClearIcon?: string;
    getInputRefs?: (ref: React.MutableRefObject<HTMLInputElement>) => any;
    isLoading?: boolean;
    hasAsync?: boolean;
    setText?: (value: string) => any;
    handleSelection?: (item: any) => any;
    handleOutSideClick?: () => any;
    handleIconSearchClick?: () => any;
}
export interface IObjectProps {
    [key: string]: any;
}
export declare function uuidv4(): string;
export declare function setActiveSelection(x: HTMLElement[], refIndexFocus: React.MutableRefObject<number>): boolean;
export declare function removeActiveSelection(x: HTMLElement[]): void;
export declare function getKeyCode(e: any): any;
export declare function isNil(value: any): boolean;
export declare function isMatchingValue(value: any, text: string, matchCompareCase: boolean): boolean;
