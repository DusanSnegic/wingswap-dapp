import JSBI from 'jsbi';
export declare enum SupportedChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    SMART_CHAIN = 56,
    MUMBAI = 80001
}
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const FIVE: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare type BigintIsh = JSBI | string | number;
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const MaxUint256: JSBI;
