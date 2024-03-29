/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Aurora Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
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
 * @interface Tx
 */
export interface Tx {
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    data: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    gasPrice: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    gas: string;
}

export function TxFromJSON(json: any): Tx {
    return TxFromJSONTyped(json, false);
}

export function TxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': json['from'],
        'to': json['to'],
        'data': json['data'],
        'value': json['value'],
        'gasPrice': json['gasPrice'],
        'gas': json['gas'],
    };
}

export function TxToJSON(value?: Tx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'data': value.data,
        'value': value.value,
        'gasPrice': value.gasPrice,
        'gas': value.gas,
    };
}

