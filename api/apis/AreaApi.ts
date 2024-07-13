/* tslint:disable */
/* eslint-disable */
/**
 * MiKloud - Customer Web API
 * This api is for the padelfy backend.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: dmartindiaz3@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AreaInDTO,
  AreaOutDTO,
  GetAreaBookings200Response,
  PaginationDTO,
} from '../models/index';
import {
    AreaInDTOFromJSON,
    AreaInDTOToJSON,
    AreaOutDTOFromJSON,
    AreaOutDTOToJSON,
    GetAreaBookings200ResponseFromJSON,
    GetAreaBookings200ResponseToJSON,
    PaginationDTOFromJSON,
    PaginationDTOToJSON,
} from '../models/index';

export interface CreateAreaRequest {
    areaInDTO: AreaInDTO;
}

export interface DeleteAreaRequest {
    areaId: string;
}

export interface GetAreaRequest {
    areaId: string;
}

export interface GetAreaBookingsRequest {
    areaId: string;
    paginationDTO: PaginationDTO;
}

export interface UpdateAreaRequest {
    areaId: string;
    areaInDTO: AreaInDTO;
}

/**
 * 
 */
export class AreaApi extends runtime.BaseAPI {

    /**
     * Create a new area
     * Create area
     */
    async createAreaRaw(requestParameters: CreateAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AreaOutDTO>> {
        if (requestParameters['areaInDTO'] == null) {
            throw new runtime.RequiredError(
                'areaInDTO',
                'Required parameter "areaInDTO" was null or undefined when calling createArea().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/areas`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AreaInDTOToJSON(requestParameters['areaInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AreaOutDTOFromJSON(jsonValue));
    }

    /**
     * Create a new area
     * Create area
     */
    async createArea(requestParameters: CreateAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AreaOutDTO> {
        const response = await this.createAreaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific area by its ID
     * Delete area by ID
     */
    async deleteAreaRaw(requestParameters: DeleteAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['areaId'] == null) {
            throw new runtime.RequiredError(
                'areaId',
                'Required parameter "areaId" was null or undefined when calling deleteArea().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/areas/{areaId}`.replace(`{${"areaId"}}`, encodeURIComponent(String(requestParameters['areaId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specific area by its ID
     * Delete area by ID
     */
    async deleteArea(requestParameters: DeleteAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAreaRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a specific area by its ID
     * Get area by ID
     */
    async getAreaRaw(requestParameters: GetAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AreaOutDTO>> {
        if (requestParameters['areaId'] == null) {
            throw new runtime.RequiredError(
                'areaId',
                'Required parameter "areaId" was null or undefined when calling getArea().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/areas/{areaId}`.replace(`{${"areaId"}}`, encodeURIComponent(String(requestParameters['areaId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AreaOutDTOFromJSON(jsonValue));
    }

    /**
     * Retrieve a specific area by its ID
     * Get area by ID
     */
    async getArea(requestParameters: GetAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AreaOutDTO> {
        const response = await this.getAreaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the bookings for a specific area
     * Get bookings for an area
     */
    async getAreaBookingsRaw(requestParameters: GetAreaBookingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAreaBookings200Response>> {
        if (requestParameters['areaId'] == null) {
            throw new runtime.RequiredError(
                'areaId',
                'Required parameter "areaId" was null or undefined when calling getAreaBookings().'
            );
        }

        if (requestParameters['paginationDTO'] == null) {
            throw new runtime.RequiredError(
                'paginationDTO',
                'Required parameter "paginationDTO" was null or undefined when calling getAreaBookings().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/areas/{areaId}/bookings`.replace(`{${"areaId"}}`, encodeURIComponent(String(requestParameters['areaId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: PaginationDTOToJSON(requestParameters['paginationDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAreaBookings200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve the bookings for a specific area
     * Get bookings for an area
     */
    async getAreaBookings(requestParameters: GetAreaBookingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAreaBookings200Response> {
        const response = await this.getAreaBookingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update details of a specific area by its ID
     * Update area by ID
     */
    async updateAreaRaw(requestParameters: UpdateAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AreaOutDTO>> {
        if (requestParameters['areaId'] == null) {
            throw new runtime.RequiredError(
                'areaId',
                'Required parameter "areaId" was null or undefined when calling updateArea().'
            );
        }

        if (requestParameters['areaInDTO'] == null) {
            throw new runtime.RequiredError(
                'areaInDTO',
                'Required parameter "areaInDTO" was null or undefined when calling updateArea().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/areas/{areaId}`.replace(`{${"areaId"}}`, encodeURIComponent(String(requestParameters['areaId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AreaInDTOToJSON(requestParameters['areaInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AreaOutDTOFromJSON(jsonValue));
    }

    /**
     * Update details of a specific area by its ID
     * Update area by ID
     */
    async updateArea(requestParameters: UpdateAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AreaOutDTO> {
        const response = await this.updateAreaRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
