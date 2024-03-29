/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Polygon Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
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
 * @interface TokenDto
 */
export interface TokenDto {
    /**
     * 
     * @type {string}
     * @memberof TokenDto
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof TokenDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TokenDto
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof TokenDto
     */
    decimals: number;
    /**
     * 
     * @type {string}
     * @memberof TokenDto
     */
    logoURI: string;
}

export function TokenDtoFromJSON(json: any): TokenDto {
    return TokenDtoFromJSONTyped(json, false);
}

export function TokenDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'name': json['name'],
        'address': json['address'],
        'decimals': json['decimals'],
        'logoURI': json['logoURI'],
    };
}

export function TokenDtoToJSON(value?: TokenDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': value.symbol,
        'name': value.name,
        'address': value.address,
        'decimals': value.decimals,
        'logoURI': value.logoURI,
    };
}

