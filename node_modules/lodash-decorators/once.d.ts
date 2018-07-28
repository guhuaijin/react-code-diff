import { BiTypedDecorator } from './factory';
/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
 * @example
 * class MyClass {
 *   value: number = 0;
 *
 *   @Once()
 *   fn(): number {
 *     return ++this.value;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 */
export declare const Once: BiTypedDecorator;
export { Once as once };
export default Once;
