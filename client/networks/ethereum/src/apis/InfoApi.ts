/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Ethereum Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ProtocolsResponseDto,
    ProtocolsResponseDtoFromJSON,
    ProtocolsResponseDtoToJSON,
    TokensResponseDto,
    TokensResponseDtoFromJSON,
    TokensResponseDtoToJSON,
} from '../models';

/**
 * 
 */
export class InfoApi extends runtime.BaseAPI {

    /**
     * List of preset configurations for the 1inch router
     */
    async chainPresetsControllerGetPresetsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v5.0/1/presets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * List of preset configurations for the 1inch router
     */
    async chainPresetsControllerGetPresets(initOverrides?: RequestInit): Promise<void> {
        await this.chainPresetsControllerGetPresetsRaw(initOverrides);
    }

    /**
     * List of liquidity sources that are available for routing in the 1inch Aggregation protocol
     */
    async chainProtocolsControllerGetProtocolsImagesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProtocolsResponseDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v5.0/1/liquidity-sources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProtocolsResponseDtoFromJSON(jsonValue));
    }

    /**
     * List of liquidity sources that are available for routing in the 1inch Aggregation protocol
     */
    async chainProtocolsControllerGetProtocolsImages(initOverrides?: RequestInit): Promise<ProtocolsResponseDto> {
        const response = await this.chainProtocolsControllerGetProtocolsImagesRaw(initOverrides);
        return await response.value();
    }

    /**
     * List of tokens that are available for swap in the 1inch Aggregation protocol
     */
    async chainTokensControllerGetTokensRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<TokensResponseDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v5.0/1/tokens`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokensResponseDtoFromJSON(jsonValue));
    }

    /**
     * List of tokens that are available for swap in the 1inch Aggregation protocol
     */
    async chainTokensControllerGetTokens(initOverrides?: RequestInit): Promise<TokensResponseDto> {
        const response = await this.chainTokensControllerGetTokensRaw(initOverrides);
        return await response.value();
    }

}
