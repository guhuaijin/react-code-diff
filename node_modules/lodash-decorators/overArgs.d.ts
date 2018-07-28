import { LodashMethodDecorator } from './factory';
declare const decorator: (...args: any[]) => MethodDecorator & PropertyDecorator;
/**
 * Creates a function that invokes func with its arguments transformed.
 * @export
 * @param {...Function[]} transforms
 * @returns {LodashMethodDecorator}
 * @example
 * class MyClass {
 *   @OverArgs(_.castArray)
 *   fn(list) {
 *     return list;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn([ 1 ]); //=> [ 1 ];
 * myClass.fn(1); //=> [ 1 ];
 */
export declare function OverArgs(...transforms: Function[]): LodashMethodDecorator;
export { OverArgs as overArgs };
export default decorator;
