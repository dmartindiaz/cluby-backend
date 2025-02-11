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
import type { SpaceOutDTOAddress } from './SpaceOutDTOAddress';
import {
    SpaceOutDTOAddressFromJSON,
    SpaceOutDTOAddressFromJSONTyped,
    SpaceOutDTOAddressToJSON,
} from './SpaceOutDTOAddress';

/**
 * 
 * @export
 * @interface SpaceOutDTO
 */
export interface SpaceOutDTO {
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    userId: string;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof SpaceOutDTO
     */
    permissions?: { [key: string]: boolean; };
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    spaceId: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    color?: string;
    /**
     * 
     * @type {SpaceOutDTOAddress}
     * @memberof SpaceOutDTO
     */
    address: SpaceOutDTOAddress;
    /**
     * 
     * @type {string}
     * @memberof SpaceOutDTO
     */
    created?: string;
}

/**
 * Check if a given object implements the SpaceOutDTO interface.
 */
export function instanceOfSpaceOutDTO(value: object): value is SpaceOutDTO {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('spaceId' in value) || value['spaceId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function SpaceOutDTOFromJSON(json: any): SpaceOutDTO {
    return SpaceOutDTOFromJSONTyped(json, false);
}

export function SpaceOutDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceOutDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'permissions': json['permissions'] == null ? undefined : json['permissions'],
        'spaceId': json['spaceId'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'color': json['color'] == null ? undefined : json['color'],
        'address': SpaceOutDTOAddressFromJSON(json['address']),
        'created': json['created'] == null ? undefined : json['created'],
    };
}

export function SpaceOutDTOToJSON(value?: SpaceOutDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userId': value['userId'],
        'permissions': value['permissions'],
        'spaceId': value['spaceId'],
        'name': value['name'],
        'description': value['description'],
        'logo': value['logo'],
        'color': value['color'],
        'address': SpaceOutDTOAddressToJSON(value['address']),
        'created': value['created'],
    };
}

