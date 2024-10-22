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

import { mapValues } from '../runtime';
import type { SimpleUserOutDTO } from './SimpleUserOutDTO';
import {
    SimpleUserOutDTOFromJSON,
    SimpleUserOutDTOFromJSONTyped,
    SimpleUserOutDTOToJSON,
} from './SimpleUserOutDTO';

/**
 * 
 * @export
 * @interface BookingOutDTO
 */
export interface BookingOutDTO {
    /**
     * 
     * @type {string}
     * @memberof BookingOutDTO
     */
    areaId?: string;
    /**
     * 
     * @type {SimpleUserOutDTO}
     * @memberof BookingOutDTO
     */
    user?: SimpleUserOutDTO;
    /**
     * 
     * @type {string}
     * @memberof BookingOutDTO
     */
    start: string;
    /**
     * 
     * @type {string}
     * @memberof BookingOutDTO
     */
    end: string;
    /**
     * 
     * @type {number}
     * @memberof BookingOutDTO
     */
    range: number;
    /**
     * 
     * @type {boolean}
     * @memberof BookingOutDTO
     */
    pay?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookingOutDTO
     */
    online?: boolean;
}

/**
 * Check if a given object implements the BookingOutDTO interface.
 */
export function instanceOfBookingOutDTO(value: object): value is BookingOutDTO {
    if (!('start' in value) || value['start'] === undefined) return false;
    if (!('end' in value) || value['end'] === undefined) return false;
    if (!('range' in value) || value['range'] === undefined) return false;
    return true;
}

export function BookingOutDTOFromJSON(json: any): BookingOutDTO {
    return BookingOutDTOFromJSONTyped(json, false);
}

export function BookingOutDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingOutDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'areaId': json['areaId'] == null ? undefined : json['areaId'],
        'user': json['user'] == null ? undefined : json['user'],
        'start': json['start'],
        'end': json['end'],
        'range': json['range'],
        'pay': json['pay'] == null ? undefined : json['pay'],
        'online': json['online'] == null ? undefined : json['online'],
    };
}

export function BookingOutDTOToJSON(value?: BookingOutDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'areaId': value['areaId'],
        'user': value['user'],
        'start': value['start'],
        'end': value['end'],
        'range': value['range'],
        'pay': value['pay'],
        'online': value['online'],
    };
}

