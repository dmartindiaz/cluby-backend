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
  NotificationInDTO,
  NotificationOutDTO,
} from '../models/index';
import {
    NotificationInDTOFromJSON,
    NotificationInDTOToJSON,
    NotificationOutDTOFromJSON,
    NotificationOutDTOToJSON,
} from '../models/index';

export interface CreateSpaceNotificationRequest {
    notificationInDTO: NotificationInDTO;
}

export interface DeleteNotificationRequest {
    notificationId: string;
}

export interface GetNotificationRequest {
    notificationId: string;
}

export interface UpdateNotificationRequest {
    notificationId: string;
    notificationInDTO: NotificationInDTO;
}

/**
 * 
 */
export class NotificationApi extends runtime.BaseAPI {

    /**
     * Create a new notification within a specific space
     * Create a notification
     */
    async createSpaceNotificationRaw(requestParameters: CreateSpaceNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NotificationOutDTO>> {
        if (requestParameters['notificationInDTO'] == null) {
            throw new runtime.RequiredError(
                'notificationInDTO',
                'Required parameter "notificationInDTO" was null or undefined when calling createSpaceNotification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/notifications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NotificationInDTOToJSON(requestParameters['notificationInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationOutDTOFromJSON(jsonValue));
    }

    /**
     * Create a new notification within a specific space
     * Create a notification
     */
    async createSpaceNotification(requestParameters: CreateSpaceNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NotificationOutDTO> {
        const response = await this.createSpaceNotificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific notification by its ID
     * Delete notification by ID
     */
    async deleteNotificationRaw(requestParameters: DeleteNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling deleteNotification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notifications/{notificationId}`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specific notification by its ID
     * Delete notification by ID
     */
    async deleteNotification(requestParameters: DeleteNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteNotificationRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a specific notification by its ID
     * Get notification by ID
     */
    async getNotificationRaw(requestParameters: GetNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NotificationOutDTO>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling getNotification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notifications/{notificationId}`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationOutDTOFromJSON(jsonValue));
    }

    /**
     * Retrieve a specific notification by its ID
     * Get notification by ID
     */
    async getNotification(requestParameters: GetNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NotificationOutDTO> {
        const response = await this.getNotificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update details of a specific notification by its ID
     * Update notification by ID
     */
    async updateNotificationRaw(requestParameters: UpdateNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NotificationOutDTO>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling updateNotification().'
            );
        }

        if (requestParameters['notificationInDTO'] == null) {
            throw new runtime.RequiredError(
                'notificationInDTO',
                'Required parameter "notificationInDTO" was null or undefined when calling updateNotification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/notifications/{notificationId}`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NotificationInDTOToJSON(requestParameters['notificationInDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationOutDTOFromJSON(jsonValue));
    }

    /**
     * Update details of a specific notification by its ID
     * Update notification by ID
     */
    async updateNotification(requestParameters: UpdateNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NotificationOutDTO> {
        const response = await this.updateNotificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}