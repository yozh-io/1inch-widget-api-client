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
import * as runtime from '../runtime';
import { QuoteResponseDto, SwapResponseDto } from '../models';
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
    compatibilityMode?: boolean;
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
export declare class SwapApi extends runtime.BaseAPI {
    /**
     * Find the best quote to exchange via 1inch router
     */
    exchangeControllerGetQuoteRaw(requestParameters: ExchangeControllerGetQuoteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<QuoteResponseDto>>;
    /**
     * Find the best quote to exchange via 1inch router
     */
    exchangeControllerGetQuote(requestParameters: ExchangeControllerGetQuoteRequest, initOverrides?: RequestInit): Promise<QuoteResponseDto>;
    /**
     * Generate data for calling the 1inch router for exchange
     */
    exchangeControllerGetSwapRaw(requestParameters: ExchangeControllerGetSwapRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SwapResponseDto>>;
    /**
     * Generate data for calling the 1inch router for exchange
     */
    exchangeControllerGetSwap(requestParameters: ExchangeControllerGetSwapRequest, initOverrides?: RequestInit): Promise<SwapResponseDto>;
}
