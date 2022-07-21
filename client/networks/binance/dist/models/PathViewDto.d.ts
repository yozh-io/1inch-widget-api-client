/**
 * 1inch Aggregation protocol API
 *  <h2>Binance Smart Chain Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)
 *
 * The version of the OpenAPI document: 4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PathViewDto
 */
export interface PathViewDto {
    /**
     *
     * @type {string}
     * @memberof PathViewDto
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof PathViewDto
     */
    part: number;
    /**
     *
     * @type {string}
     * @memberof PathViewDto
     */
    fromTokenAddress: string;
    /**
     *
     * @type {string}
     * @memberof PathViewDto
     */
    toTokenAddress: string;
}
export declare function PathViewDtoFromJSON(json: any): PathViewDto;
export declare function PathViewDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PathViewDto;
export declare function PathViewDtoToJSON(value?: PathViewDto | null): any;
