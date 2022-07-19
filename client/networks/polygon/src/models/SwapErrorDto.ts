/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Polygon Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
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
    NestErrorMeta,
    NestErrorMetaFromJSON,
    NestErrorMetaFromJSONTyped,
    NestErrorMetaToJSON,
} from './NestErrorMeta';

/**
 * 
 * @export
 * @interface SwapErrorDto
 */
export interface SwapErrorDto {
    /**
     * HTTP code
     * @type {number}
     * @memberof SwapErrorDto
     */
    statusCode: number;
    /**
     * Error code description
     * @type {string}
     * @memberof SwapErrorDto
     */
    error: string;
    /**
     * Error description (one of the following)
     * @type {string}
     * @memberof SwapErrorDto
     */
    description: string;
    /**
     * Request id
     * @type {string}
     * @memberof SwapErrorDto
     */
    requestId: string;
    /**
     * Meta information
     * @type {Array<NestErrorMeta>}
     * @memberof SwapErrorDto
     */
    meta: Array<NestErrorMeta>;
}

export function SwapErrorDtoFromJSON(json: any): SwapErrorDto {
    return SwapErrorDtoFromJSONTyped(json, false);
}

export function SwapErrorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapErrorDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'error': json['error'],
        'description': json['description'],
        'requestId': json['requestId'],
        'meta': ((json['meta'] as Array<any>).map(NestErrorMetaFromJSON)),
    };
}

export function SwapErrorDtoToJSON(value?: SwapErrorDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'error': value.error,
        'description': value.description,
        'requestId': value.requestId,
        'meta': ((value.meta as Array<any>).map(NestErrorMetaToJSON)),
    };
}

