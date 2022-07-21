"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Arbitrum Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)
 *
 * The version of the OpenAPI document: 4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const PathViewDto_1 = require("./PathViewDto");
const TokenDto_1 = require("./TokenDto");
function QuoteResponseDtoFromJSON(json) {
    return QuoteResponseDtoFromJSONTyped(json, false);
}
exports.QuoteResponseDtoFromJSON = QuoteResponseDtoFromJSON;
function QuoteResponseDtoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fromToken': TokenDto_1.TokenDtoFromJSON(json['fromToken']),
        'toToken': TokenDto_1.TokenDtoFromJSON(json['toToken']),
        'toTokenAmount': json['toTokenAmount'],
        'fromTokenAmount': json['fromTokenAmount'],
        'protocols': (json['protocols'].map(PathViewDto_1.PathViewDtoFromJSON)),
        'estimatedGas': json['estimatedGas'],
    };
}
exports.QuoteResponseDtoFromJSONTyped = QuoteResponseDtoFromJSONTyped;
function QuoteResponseDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fromToken': TokenDto_1.TokenDtoToJSON(value.fromToken),
        'toToken': TokenDto_1.TokenDtoToJSON(value.toToken),
        'toTokenAmount': value.toTokenAmount,
        'fromTokenAmount': value.fromTokenAmount,
        'protocols': (value.protocols.map(PathViewDto_1.PathViewDtoToJSON)),
        'estimatedGas': value.estimatedGas,
    };
}
exports.QuoteResponseDtoToJSON = QuoteResponseDtoToJSON;