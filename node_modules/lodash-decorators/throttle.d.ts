import { BiTypedDecorator2 } from './factory';
import { ThrottleOptions } from './shared';
export declare const Throttle: BiTypedDecorator2<number, ThrottleOptions>;
export declare const ThrottleGetter: BiTypedDecorator2<number, ThrottleOptions>;
export declare const ThrottleSetter: BiTypedDecorator2<number, ThrottleOptions>;
export { Throttle as throttle };
export { ThrottleGetter as throttleGetter };
export { ThrottleSetter as throttleSetter };
export default Throttle;
