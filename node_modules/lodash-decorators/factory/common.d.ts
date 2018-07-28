import { Applicator } from '../applicators';
import { CompositeKeyWeakMap } from '../utils';
export declare type ApplicatorToken = {
    new (): Applicator;
};
export declare type LodashMethodDecorator = MethodDecorator;
export declare type LodashDecorator = MethodDecorator & PropertyDecorator;
export declare type ResolvableFunction = string | Function;
export declare type BiTypedMethodDecorator = (() => LodashMethodDecorator) & LodashMethodDecorator;
export declare type BiTypedMethodDecorator1<T> = ((arg?: T) => LodashMethodDecorator) & LodashMethodDecorator;
export declare type BiTypedMethodDecorator2<T, T2> = ((arg1?: T, arg2?: T2) => LodashMethodDecorator) & LodashMethodDecorator;
export declare type BiTypedMethodDecorator3<T, T2, T3> = ((arg1?: T, arg2?: T2, arg3?: T3) => LodashMethodDecorator) & LodashMethodDecorator;
export declare type BiTypedMethodDecoratorN = ((...args: any[]) => LodashMethodDecorator) & LodashMethodDecorator;
export declare type BiTypedDecorator = (() => LodashDecorator) & LodashDecorator;
export declare type BiTypedDecorator1<T> = ((arg?: T) => LodashDecorator) & LodashDecorator;
export declare type BiTypedDecorator2<T, T2> = ((arg1?: T, arg2?: T2) => LodashDecorator) & LodashDecorator;
export declare type BiTypedDecorator3<T, T2, T3> = ((arg1?: T, arg2?: T2, arg3?: T3) => LodashDecorator) & LodashDecorator;
export declare type BiTypedDecoratorN = ((...args: any[]) => LodashDecorator) & LodashDecorator;
export interface InstanceChainContext {
    getter?: boolean;
    setter?: boolean;
    method?: boolean;
    property?: boolean;
    value: any;
}
export interface InstanceChainData {
    properties: string[];
    fns: Function[];
    isGetter: boolean;
    isSetter: boolean;
    isMethod: boolean;
    isProperty: boolean;
}
export declare const InstanceChainMap: CompositeKeyWeakMap<InstanceChainData>;
