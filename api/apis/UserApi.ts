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
  GetUserSpaces200Response,
  PaginationDTO,
  SimpleUserInDTO,
  UserInDTO,
  UserOutDTO,
} from '../models/index';
import {
    GetUserSpaces200ResponseFromJSON,
    GetUserSpaces200ResponseToJSON,
    PaginationDTOFromJSON,
    PaginationDTOToJSON,
    SimpleUserInDTOFromJSON,
    SimpleUserInDTOToJSON,
    UserInDTOFromJSON,
    UserInDTOToJSON,
    UserOutDTOFromJSON,
    UserOutDTOToJSON,
} from '../models/index';

export interface CreateUserRequest {
    userId: string;
    userInDTO?: UserInDTO;
}

export interface DeleteUserRequest {
    userId: string;
}

export interface GetUserRequest {
    userId: string;
}

export interface GetUserLoginRequest {
    simpleUserInDTO?: SimpleUserInDTO;
}

export interface GetUserSpacesRequest {
    userId: string;
    paginationDTO: PaginationDTO;
}

export interface UpdateUserRequest {
    userId: string;
    userInDTO: UserInDTO;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Post a new user
     * Post user
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInDTO>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling createUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserInDTOToJSON(requestParameters['userInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserInDTOFromJSON(jsonValue));
    }

    /**
     * Post a new user
     * Post user
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInDTO> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Cancel the account of the user. If user is the administrator of any customer, they cannot cancel the account until they cancel the client.
     * Cancel account
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancel the account of the user. If user is the administrator of any customer, they cannot cancel the account until they cancel the client.
     * Cancel account
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * Get user details, like name, surname, email, phone...
     * Get user by id
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserOutDTO>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserOutDTOFromJSON(jsonValue));
    }

    /**
     * Get user details, like name, surname, email, phone...
     * Get user by id
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserOutDTO> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user details, like name, surname, email, phone...
     * Get user by email
     */
    async getUserLoginRaw(requestParameters: GetUserLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserOutDTO>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: SimpleUserInDTOToJSON(requestParameters['simpleUserInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserOutDTOFromJSON(jsonValue));
    }

    /**
     * Get user details, like name, surname, email, phone...
     * Get user by email
     */
    async getUserLogin(requestParameters: GetUserLoginRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserOutDTO> {
        const response = await this.getUserLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Take the spaces that user have permissions
     * Get user spaces
     */
    async getUserSpacesRaw(requestParameters: GetUserSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUserSpaces200Response>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUserSpaces().'
            );
        }

        if (requestParameters['paginationDTO'] == null) {
            throw new runtime.RequiredError(
                'paginationDTO',
                'Required parameter "paginationDTO" was null or undefined when calling getUserSpaces().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{userId}/spaces`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: PaginationDTOToJSON(requestParameters['paginationDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserSpaces200ResponseFromJSON(jsonValue));
    }

    /**
     * Take the spaces that user have permissions
     * Get user spaces
     */
    async getUserSpaces(requestParameters: GetUserSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUserSpaces200Response> {
        const response = await this.getUserSpacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update user details
     * Update user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserOutDTO>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling updateUser().'
            );
        }

        if (requestParameters['userInDTO'] == null) {
            throw new runtime.RequiredError(
                'userInDTO',
                'Required parameter "userInDTO" was null or undefined when calling updateUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserInDTOToJSON(requestParameters['userInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserOutDTOFromJSON(jsonValue));
    }

    /**
     * Update user details
     * Update user
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserOutDTO> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}