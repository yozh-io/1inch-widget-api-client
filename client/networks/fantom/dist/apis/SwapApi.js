"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Fantom Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)
 *
 * The version of the OpenAPI document: 5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class SwapApi extends runtime.BaseAPI {
    /**
     * Find the best quote to exchange via 1inch router
     */
    exchangeControllerGetQuoteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.fromTokenAddress === null || requestParameters.fromTokenAddress === undefined) {
                throw new runtime.RequiredError('fromTokenAddress', 'Required parameter requestParameters.fromTokenAddress was null or undefined when calling exchangeControllerGetQuote.');
            }
            if (requestParameters.toTokenAddress === null || requestParameters.toTokenAddress === undefined) {
                throw new runtime.RequiredError('toTokenAddress', 'Required parameter requestParameters.toTokenAddress was null or undefined when calling exchangeControllerGetQuote.');
            }
            if (requestParameters.amount === null || requestParameters.amount === undefined) {
                throw new runtime.RequiredError('amount', 'Required parameter requestParameters.amount was null or undefined when calling exchangeControllerGetQuote.');
            }
            const queryParameters = {};
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/v5.0/250/quote`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.QuoteResponseDtoFromJSON(jsonValue));
        });
    }
    /**
     * Find the best quote to exchange via 1inch router
     */
    exchangeControllerGetQuote(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.exchangeControllerGetQuoteRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Generate data for calling the 1inch router for exchange
     */
    exchangeControllerGetSwapRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.fromTokenAddress === null || requestParameters.fromTokenAddress === undefined) {
                throw new runtime.RequiredError('fromTokenAddress', 'Required parameter requestParameters.fromTokenAddress was null or undefined when calling exchangeControllerGetSwap.');
            }
            if (requestParameters.toTokenAddress === null || requestParameters.toTokenAddress === undefined) {
                throw new runtime.RequiredError('toTokenAddress', 'Required parameter requestParameters.toTokenAddress was null or undefined when calling exchangeControllerGetSwap.');
            }
            if (requestParameters.amount === null || requestParameters.amount === undefined) {
                throw new runtime.RequiredError('amount', 'Required parameter requestParameters.amount was null or undefined when calling exchangeControllerGetSwap.');
            }
            if (requestParameters.fromAddress === null || requestParameters.fromAddress === undefined) {
                throw new runtime.RequiredError('fromAddress', 'Required parameter requestParameters.fromAddress was null or undefined when calling exchangeControllerGetSwap.');
            }
            if (requestParameters.slippage === null || requestParameters.slippage === undefined) {
                throw new runtime.RequiredError('slippage', 'Required parameter requestParameters.slippage was null or undefined when calling exchangeControllerGetSwap.');
            }
            const queryParameters = {};
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
            if (requestParameters.compatibilityMode !== undefined) {
                queryParameters['compatibilityMode'] = requestParameters.compatibilityMode;
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/v5.0/250/swap`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.SwapResponseDtoFromJSON(jsonValue));
        });
    }
    /**
     * Generate data for calling the 1inch router for exchange
     */
    exchangeControllerGetSwap(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.exchangeControllerGetSwapRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SwapApi = SwapApi;
