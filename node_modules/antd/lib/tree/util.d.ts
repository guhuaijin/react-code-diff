import * as React from 'react';
export interface TraverseData {
    key: string;
}
/** 计算选中范围，只考虑expanded情况以优化性能 */
export declare function calcRangeKeys(nodeList: React.ReactNode | React.ReactNode[], expandedKeys: string[], startKey?: string, endKey?: string): string[];
