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
/**
 * 
 * @export
 * @interface ProtocolImageDto
 */
export interface ProtocolImageDto {
    /**
     * Protocol id
     * @type {string}
     * @memberof ProtocolImageDto
     */
    id: string;
    /**
     * Protocol title
     * @type {string}
     * @memberof ProtocolImageDto
     */
    title: string;
    /**
     * Protocol logo image
     * @type {string}
     * @memberof ProtocolImageDto
     */
    img: string;
    /**
     * Protocol logo image in color
     * @type {string}
     * @memberof ProtocolImageDto
     */
    imgColor: string;
}

export function ProtocolImageDtoFromJSON(json: any): ProtocolImageDto {
    return ProtocolImageDtoFromJSONTyped(json, false);
}

export function ProtocolImageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtocolImageDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'img': json['img'],
        'imgColor': json['img_color'],
    };
}

export function ProtocolImageDtoToJSON(value?: ProtocolImageDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'img': value.img,
        'img_color': value.imgColor,
    };
}

