/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Fantom Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
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
    ProtocolImageDto,
    ProtocolImageDtoFromJSON,
    ProtocolImageDtoFromJSONTyped,
    ProtocolImageDtoToJSON,
} from './ProtocolImageDto';

/**
 * 
 * @export
 * @interface ProtocolsResponseDto
 */
export interface ProtocolsResponseDto {
    /**
     * List of protocols that are available for routing in the 1inch Aggregation protocol
     * @type {Array<ProtocolImageDto>}
     * @memberof ProtocolsResponseDto
     */
    protocols: Array<ProtocolImageDto>;
}

export function ProtocolsResponseDtoFromJSON(json: any): ProtocolsResponseDto {
    return ProtocolsResponseDtoFromJSONTyped(json, false);
}

export function ProtocolsResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtocolsResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'protocols': ((json['protocols'] as Array<any>).map(ProtocolImageDtoFromJSON)),
    };
}

export function ProtocolsResponseDtoToJSON(value?: ProtocolsResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'protocols': ((value.protocols as Array<any>).map(ProtocolImageDtoToJSON)),
    };
}

