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
import { PathViewDto } from './PathViewDto';
import { TokenDto } from './TokenDto';
/**
 *
 * @export
 * @interface QuoteResponseDto
 */
export interface QuoteResponseDto {
    /**
     * Source token info
     * @type {TokenDto}
     * @memberof QuoteResponseDto
     */
    fromToken: TokenDto | null;
    /**
     * Destination token info
     * @type {TokenDto}
     * @memberof QuoteResponseDto
     */
    toToken: TokenDto | null;
    /**
     * Expected amount of destination token
     * @type {string}
     * @memberof QuoteResponseDto
     */
    toTokenAmount: string;
    /**
     * Amount of source token
     * @type {string}
     * @memberof QuoteResponseDto
     */
    fromTokenAmount: string;
    /**
     * Selected protocols in a path
     * @type {Array<PathViewDto>}
     * @memberof QuoteResponseDto
     */
    protocols: Array<PathViewDto>;
    /**
     *
     * @type {number}
     * @memberof QuoteResponseDto
     */
    estimatedGas: number;
}
export declare function QuoteResponseDtoFromJSON(json: any): QuoteResponseDto;
export declare function QuoteResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteResponseDto;
export declare function QuoteResponseDtoToJSON(value?: QuoteResponseDto | null): any;
