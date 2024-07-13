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
  FacilityInDTO,
  FacilityOutDTO,
  GetFacilityAreas200Response,
  PaginationDTO,
} from '../models/index';
import {
    FacilityInDTOFromJSON,
    FacilityInDTOToJSON,
    FacilityOutDTOFromJSON,
    FacilityOutDTOToJSON,
    GetFacilityAreas200ResponseFromJSON,
    GetFacilityAreas200ResponseToJSON,
    PaginationDTOFromJSON,
    PaginationDTOToJSON,
} from '../models/index';

export interface CreateFacilityRequest {
    spaceId: string;
    facilityInDTO: FacilityInDTO;
}

export interface DeleteFacilityRequest {
    facilityId: string;
}

export interface GetFacilityRequest {
    facilityId: string;
}

export interface GetFacilityAreasRequest {
    facilityId: string;
    paginationDTO: PaginationDTO;
}

export interface UpdateFacilityRequest {
    facilityId: string;
    facilityInDTO: FacilityInDTO;
}

/**
 * 
 */
export class FacilityApi extends runtime.BaseAPI {

    /**
     * Create a new facility
     * Create space facility
     */
    async createFacilityRaw(requestParameters: CreateFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacilityOutDTO>> {
        if (requestParameters['spaceId'] == null) {
            throw new runtime.RequiredError(
                'spaceId',
                'Required parameter "spaceId" was null or undefined when calling createFacility().'
            );
        }

        if (requestParameters['facilityInDTO'] == null) {
            throw new runtime.RequiredError(
                'facilityInDTO',
                'Required parameter "facilityInDTO" was null or undefined when calling createFacility().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/facilities`.replace(`{${"spaceId"}}`, encodeURIComponent(String(requestParameters['spaceId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FacilityInDTOToJSON(requestParameters['facilityInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FacilityOutDTOFromJSON(jsonValue));
    }

    /**
     * Create a new facility
     * Create space facility
     */
    async createFacility(requestParameters: CreateFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacilityOutDTO> {
        const response = await this.createFacilityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a user facility
     * Delete user facility
     */
    async deleteFacilityRaw(requestParameters: DeleteFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['facilityId'] == null) {
            throw new runtime.RequiredError(
                'facilityId',
                'Required parameter "facilityId" was null or undefined when calling deleteFacility().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/facilities/{facilityId}`.replace(`{${"facilityId"}}`, encodeURIComponent(String(requestParameters['facilityId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a user facility
     * Delete user facility
     */
    async deleteFacility(requestParameters: DeleteFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFacilityRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the facility by id
     * Get facility
     */
    async getFacilityRaw(requestParameters: GetFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacilityOutDTO>> {
        if (requestParameters['facilityId'] == null) {
            throw new runtime.RequiredError(
                'facilityId',
                'Required parameter "facilityId" was null or undefined when calling getFacility().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/facilities/{facilityId}`.replace(`{${"facilityId"}}`, encodeURIComponent(String(requestParameters['facilityId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FacilityOutDTOFromJSON(jsonValue));
    }

    /**
     * Retrieve the facility by id
     * Get facility
     */
    async getFacility(requestParameters: GetFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacilityOutDTO> {
        const response = await this.getFacilityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the areas of a facility
     * Get areas of a facility
     */
    async getFacilityAreasRaw(requestParameters: GetFacilityAreasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFacilityAreas200Response>> {
        if (requestParameters['facilityId'] == null) {
            throw new runtime.RequiredError(
                'facilityId',
                'Required parameter "facilityId" was null or undefined when calling getFacilityAreas().'
            );
        }

        if (requestParameters['paginationDTO'] == null) {
            throw new runtime.RequiredError(
                'paginationDTO',
                'Required parameter "paginationDTO" was null or undefined when calling getFacilityAreas().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/facilities/{facilityId}/areas`.replace(`{${"facilityId"}}`, encodeURIComponent(String(requestParameters['facilityId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: PaginationDTOToJSON(requestParameters['paginationDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFacilityAreas200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve the areas of a facility
     * Get areas of a facility
     */
    async getFacilityAreas(requestParameters: GetFacilityAreasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFacilityAreas200Response> {
        const response = await this.getFacilityAreasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a facility
     * Update facility
     */
    async updateFacilityRaw(requestParameters: UpdateFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FacilityOutDTO>> {
        if (requestParameters['facilityId'] == null) {
            throw new runtime.RequiredError(
                'facilityId',
                'Required parameter "facilityId" was null or undefined when calling updateFacility().'
            );
        }

        if (requestParameters['facilityInDTO'] == null) {
            throw new runtime.RequiredError(
                'facilityInDTO',
                'Required parameter "facilityInDTO" was null or undefined when calling updateFacility().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/facilities/{facilityId}`.replace(`{${"facilityId"}}`, encodeURIComponent(String(requestParameters['facilityId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FacilityInDTOToJSON(requestParameters['facilityInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FacilityOutDTOFromJSON(jsonValue));
    }

    /**
     * Update a facility
     * Update facility
     */
    async updateFacility(requestParameters: UpdateFacilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FacilityOutDTO> {
        const response = await this.updateFacilityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}