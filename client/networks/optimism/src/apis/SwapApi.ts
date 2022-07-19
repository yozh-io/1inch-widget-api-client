/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Optimism Mainnet Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    QuoteResponseDto,
    QuoteResponseDtoFromJSON,
    QuoteResponseDtoToJSON,
    SwapErrorDto,
    SwapErrorDtoFromJSON,
    SwapErrorDtoToJSON,
    SwapResponseDto,
    SwapResponseDtoFromJSON,
    SwapResponseDtoToJSON,
} from '../models';

export interface ExchangeControllerGetQuoteRequest {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: string;
    protocols?: string;
    fee?: string;
    gasLimit?: any;
    connectorTokens?: any;
    complexityLevel?: any;
    mainRouteParts?: any;
    parts?: any;
    gasPrice?: any;
}

export interface ExchangeControllerGetSwapRequest {
    fromTokenAddress: string;
    toTokenAddress: string;
    amount: string;
    fromAddress: string;
    slippage: number;
    protocols?: string;
    destReceiver?: string;
    referrerAddress?: string;
    fee?: string;
    disableEstimate?: boolean;
    permit?: string;
    burnChi?: boolean;
    allowPartialFill?: boolean;
    parts?: any;
    mainRouteParts?: any;
    connectorTokens?: any;
    complexityLevel?: any;
    gasLimit?: any;
    gasPrice?: any;
}

/**
 * 
 */
export class SwapApi extends runtime.BaseAPI {

    /**
     * Find the best quote to exchange via 1inch router
     */
    async exchangeControllerGetQuoteRaw(requestParameters: ExchangeControllerGetQuoteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<QuoteResponseDto>> {
        if (requestParameters.fromTokenAddress === null || requestParameters.fromTokenAddress === undefined) {
            throw new runtime.RequiredError('fromTokenAddress','Required parameter requestParameters.fromTokenAddress was null or undefined when calling exchangeControllerGetQuote.');
        }

        if (requestParameters.toTokenAddress === null || requestParameters.toTokenAddress === undefined) {
            throw new runtime.RequiredError('toTokenAddress','Required parameter requestParameters.toTokenAddress was null or undefined when calling exchangeControllerGetQuote.');
        }

        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling exchangeControllerGetQuote.');
        }

        const queryParameters: any = {};

        if (requestParameters.fromTokenAddress !== undefined) {
            queryParameters['fromTokenAddress'] = requestParameters.fromTokenAddress;
        }

        if (requestParameters.toTokenAddress !== undefined) {
            queryParameters['toTokenAddress'] = requestParameters.toTokenAddress;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.protocols !== undefined) {
            queryParameters['protocols'] = requestParameters.protocols;
        }

        if (requestParameters.fee !== undefined) {
            queryParameters['fee'] = requestParameters.fee;
        }

        if (requestParameters.gasLimit !== undefined) {
            queryParameters['gasLimit'] = requestParameters.gasLimit;
        }

        if (requestParameters.connectorTokens !== undefined) {
            queryParameters['connectorTokens'] = requestParameters.connectorTokens;
        }

        if (requestParameters.complexityLevel !== undefined) {
            queryParameters['complexityLevel'] = requestParameters.complexityLevel;
        }

        if (requestParameters.mainRouteParts !== undefined) {
            queryParameters['mainRouteParts'] = requestParameters.mainRouteParts;
        }

        if (requestParameters.parts !== undefined) {
            queryParameters['parts'] = requestParameters.parts;
        }

        if (requestParameters.gasPrice !== undefined) {
            queryParameters['gasPrice'] = requestParameters.gasPrice;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v4.0/10/quote`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuoteResponseDtoFromJSON(jsonValue));
    }

    /**
     * Find the best quote to exchange via 1inch router
     */
    async exchangeControllerGetQuote(requestParameters: ExchangeControllerGetQuoteRequest, initOverrides?: RequestInit): Promise<QuoteResponseDto> {
        const response = await this.exchangeControllerGetQuoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate data for calling the 1inch router for exchange
     */
    async exchangeControllerGetSwapRaw(requestParameters: ExchangeControllerGetSwapRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwapResponseDto>> {
        if (requestParameters.fromTokenAddress === null || requestParameters.fromTokenAddress === undefined) {
            throw new runtime.RequiredError('fromTokenAddress','Required parameter requestParameters.fromTokenAddress was null or undefined when calling exchangeControllerGetSwap.');
        }

        if (requestParameters.toTokenAddress === null || requestParameters.toTokenAddress === undefined) {
            throw new runtime.RequiredError('toTokenAddress','Required parameter requestParameters.toTokenAddress was null or undefined when calling exchangeControllerGetSwap.');
        }

        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling exchangeControllerGetSwap.');
        }

        if (requestParameters.fromAddress === null || requestParameters.fromAddress === undefined) {
            throw new runtime.RequiredError('fromAddress','Required parameter requestParameters.fromAddress was null or undefined when calling exchangeControllerGetSwap.');
        }

        if (requestParameters.slippage === null || requestParameters.slippage === undefined) {
            throw new runtime.RequiredError('slippage','Required parameter requestParameters.slippage was null or undefined when calling exchangeControllerGetSwap.');
        }

        const queryParameters: any = {};

        if (requestParameters.fromTokenAddress !== undefined) {
            queryParameters['fromTokenAddress'] = requestParameters.fromTokenAddress;
        }

        if (requestParameters.toTokenAddress !== undefined) {
            queryParameters['toTokenAddress'] = requestParameters.toTokenAddress;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.fromAddress !== undefined) {
            queryParameters['fromAddress'] = requestParameters.fromAddress;
        }

        if (requestParameters.slippage !== undefined) {
            queryParameters['slippage'] = requestParameters.slippage;
        }

        if (requestParameters.protocols !== undefined) {
            queryParameters['protocols'] = requestParameters.protocols;
        }

        if (requestParameters.destReceiver !== undefined) {
            queryParameters['destReceiver'] = requestParameters.destReceiver;
        }

        if (requestParameters.referrerAddress !== undefined) {
            queryParameters['referrerAddress'] = requestParameters.referrerAddress;
        }

        if (requestParameters.fee !== undefined) {
            queryParameters['fee'] = requestParameters.fee;
        }

        if (requestParameters.disableEstimate !== undefined) {
            queryParameters['disableEstimate'] = requestParameters.disableEstimate;
        }

        if (requestParameters.permit !== undefined) {
            queryParameters['permit'] = requestParameters.permit;
        }

        if (requestParameters.burnChi !== undefined) {
            queryParameters['burnChi'] = requestParameters.burnChi;
        }

        if (requestParameters.allowPartialFill !== undefined) {
            queryParameters['allowPartialFill'] = requestParameters.allowPartialFill;
        }

        if (requestParameters.parts !== undefined) {
            queryParameters['parts'] = requestParameters.parts;
        }

        if (requestParameters.mainRouteParts !== undefined) {
            queryParameters['mainRouteParts'] = requestParameters.mainRouteParts;
        }

        if (requestParameters.connectorTokens !== undefined) {
            queryParameters['connectorTokens'] = requestParameters.connectorTokens;
        }

        if (requestParameters.complexityLevel !== undefined) {
            queryParameters['complexityLevel'] = requestParameters.complexityLevel;
        }

        if (requestParameters.gasLimit !== undefined) {
            queryParameters['gasLimit'] = requestParameters.gasLimit;
        }

        if (requestParameters.gasPrice !== undefined) {
            queryParameters['gasPrice'] = requestParameters.gasPrice;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v4.0/10/swap`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwapResponseDtoFromJSON(jsonValue));
    }

    /**
     * Generate data for calling the 1inch router for exchange
     */
    async exchangeControllerGetSwap(requestParameters: ExchangeControllerGetSwapRequest, initOverrides?: RequestInit): Promise<SwapResponseDto> {
        const response = await this.exchangeControllerGetSwapRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
