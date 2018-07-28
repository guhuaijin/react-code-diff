declare const decorator: (...args: any[]) => MethodDecorator & PropertyDecorator;
/**
 * Partially applies arguments to a function.
 * @export
 * @param {...any[]} partials
 * @returns {PropertyDecorator}
 * @example
 * class MyClass {
 *   lastName: string = 'Schmo';
 *
 *   @Partial('fn', 'Joe')
 *   fn2: () => string;
 *
 *   fn(name: string): string {
 *     return `${name} ${this.lastName}`;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn2(); //=> 'Joe Schmo'
 */
export declare function Partial(...partials: any[]): PropertyDecorator;
export { Partial as partial };
export default decorator;
