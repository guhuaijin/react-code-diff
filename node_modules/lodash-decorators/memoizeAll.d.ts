import { BiTypedMethodDecorator1 } from './factory';
import { MemoizeConfig } from './shared';
/**
 * Memoizes a function on the prototype instead of the instance. All instances of the class use the same memoize cache.
 * @param {Function} [resolver] Optional resolver
 */
export declare const MemoizeAll: BiTypedMethodDecorator1<Function | MemoizeConfig<any, any>>;
export { MemoizeAll as memoizeAll };
export default MemoizeAll;
