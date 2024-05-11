export interface IDataType {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface IOption {
    label: any;
    value: any;
}

export interface IPropsSelect { options: IOption[], name: string, label: string }