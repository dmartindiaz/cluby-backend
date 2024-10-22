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
/**
 * 
 * @export
 * @interface SpaceOutDTOAddress
 */
export interface SpaceOutDTOAddress {
    /**
     * Nombre de la calle y número.
     * @type {string}
     * @memberof SpaceOutDTOAddress
     */
    street: string;
    /**
     * Ciudad.
     * @type {string}
     * @memberof SpaceOutDTOAddress
     */
    city: string;
    /**
     * Estado o provincia.
     * @type {string}
     * @memberof SpaceOutDTOAddress
     */
    state?: string;
    /**
     * Código postal.
     * @type {string}
     * @memberof SpaceOutDTOAddress
     */
    postalCode: string;
    /**
     * País.
     * @type {string}
     * @memberof SpaceOutDTOAddress
     */
    country: string;
    /**
     * 
     * @type {boolean}
     * @memberof SpaceOutDTOAddress
     */
    onlineAvailable?: boolean;
}

/**
 * Check if a given object implements the SpaceOutDTOAddress interface.
 */
export function instanceOfSpaceOutDTOAddress(value: object): value is SpaceOutDTOAddress {
    if (!('street' in value) || value['street'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('postalCode' in value) || value['postalCode'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    return true;
}

export function SpaceOutDTOAddressFromJSON(json: any): SpaceOutDTOAddress {
    return SpaceOutDTOAddressFromJSONTyped(json, false);
}

export function SpaceOutDTOAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceOutDTOAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'street': json['street'],
        'city': json['city'],
        'state': json['state'] == null ? undefined : json['state'],
        'postalCode': json['postalCode'],
        'country': json['country'],
        'onlineAvailable': json['onlineAvailable'] == null ? undefined : json['onlineAvailable'],
    };
}

export function SpaceOutDTOAddressToJSON(value?: SpaceOutDTOAddress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'street': value['street'],
        'city': value['city'],
        'state': value['state'],
        'postalCode': value['postalCode'],
        'country': value['country'],
        'onlineAvailable': value['onlineAvailable'],
    };
}

