/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Klaytn Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NestErrorMeta
 */
export interface NestErrorMeta {
    /**
     * Type of field
     * @type {string}
     * @memberof NestErrorMeta
     */
    type: string;
    /**
     * Value of field
     * @type {object}
     * @memberof NestErrorMeta
     */
    value: object;
}

export function NestErrorMetaFromJSON(json: any): NestErrorMeta {
    return NestErrorMetaFromJSONTyped(json, false);
}

export function NestErrorMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestErrorMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function NestErrorMetaToJSON(value?: NestErrorMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}
