"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Avalanche Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)
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
class InfoApi extends runtime.BaseAPI {
    /**
     * List of preset configurations for the 1inch router
     */
    chainPresetsControllerGetPresetsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v5.0/43114/presets`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * List of preset configurations for the 1inch router
     */
    chainPresetsControllerGetPresets(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.chainPresetsControllerGetPresetsRaw(initOverrides);
        });
    }
    /**
     * List of liquidity sources that are available for routing in the 1inch Aggregation protocol
     */
    chainProtocolsControllerGetProtocolsImagesRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v5.0/43114/liquidity-sources`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.ProtocolsResponseDtoFromJSON(jsonValue));
        });
    }
    /**
     * List of liquidity sources that are available for routing in the 1inch Aggregation protocol
     */
    chainProtocolsControllerGetProtocolsImages(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.chainProtocolsControllerGetProtocolsImagesRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * List of tokens that are available for swap in the 1inch Aggregation protocol
     */
    chainTokensControllerGetTokensRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v5.0/43114/tokens`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.TokensResponseDtoFromJSON(jsonValue));
        });
    }
    /**
     * List of tokens that are available for swap in the 1inch Aggregation protocol
     */
    chainTokensControllerGetTokens(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.chainTokensControllerGetTokensRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.InfoApi = InfoApi;
