/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Ethereum Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TokenDto,
    TokenDtoFromJSON,
    TokenDtoFromJSONTyped,
    TokenDtoToJSON,
} from './TokenDto';
import {
    Tx,
    TxFromJSON,
    TxFromJSONTyped,
    TxToJSON,
} from './Tx';

/**
 * 
 * @export
 * @interface SwapResponseDto
 */
export interface SwapResponseDto {
    /**
     * Source token info
     * @type {TokenDto}
     * @memberof SwapResponseDto
     */
    fromToken: TokenDto | null;
    /**
     * Destination token info
     * @type {TokenDto}
     * @memberof SwapResponseDto
     */
    toToken: TokenDto | null;
    /**
     * Expected amount of destination token
     * @type {string}
     * @memberof SwapResponseDto
     */
    toTokenAmount: string;
    /**
     * Amount of source token
     * @type {string}
     * @memberof SwapResponseDto
     */
    fromTokenAmount: string;
    /**
     * Selected protocols in a path
     * @type {Array<string>}
     * @memberof SwapResponseDto
     */
    protocols: Array<string>;
    /**
     * Transaction object
     * @type {Tx}
     * @memberof SwapResponseDto
     */
    tx: Tx | null;
}

export function SwapResponseDtoFromJSON(json: any): SwapResponseDto {
    return SwapResponseDtoFromJSONTyped(json, false);
}

export function SwapResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromToken': TokenDtoFromJSON(json['fromToken']),
        'toToken': TokenDtoFromJSON(json['toToken']),
        'toTokenAmount': json['toTokenAmount'],
        'fromTokenAmount': json['fromTokenAmount'],
        'protocols': json['protocols'],
        'tx': TxFromJSON(json['tx']),
    };
}

export function SwapResponseDtoToJSON(value?: SwapResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromToken': TokenDtoToJSON(value.fromToken),
        'toToken': TokenDtoToJSON(value.toToken),
        'toTokenAmount': value.toTokenAmount,
        'fromTokenAmount': value.fromTokenAmount,
        'protocols': value.protocols,
        'tx': TxToJSON(value.tx),
    };
}

