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
 * @interface AreaInDTOHoursRangeInner
 */
export interface AreaInDTOHoursRangeInner {
    /**
     * 
     * @type {string}
     * @memberof AreaInDTOHoursRangeInner
     */
    start?: string;
    /**
     * 
     * @type {string}
     * @memberof AreaInDTOHoursRangeInner
     */
    end?: string;
    /**
     * 
     * @type {number}
     * @memberof AreaInDTOHoursRangeInner
     */
    range?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AreaInDTOHoursRangeInner
     */
    disabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AreaInDTOHoursRangeInner
     */
    online?: boolean;
}

/**
 * Check if a given object implements the AreaInDTOHoursRangeInner interface.
 */
export function instanceOfAreaInDTOHoursRangeInner(value: object): value is AreaInDTOHoursRangeInner {
    return true;
}

export function AreaInDTOHoursRangeInnerFromJSON(json: any): AreaInDTOHoursRangeInner {
    return AreaInDTOHoursRangeInnerFromJSONTyped(json, false);
}

export function AreaInDTOHoursRangeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AreaInDTOHoursRangeInner {
    if (json == null) {
        return json;
    }
    return {
        
        'start': json['start'] == null ? undefined : json['start'],
        'end': json['end'] == null ? undefined : json['end'],
        'range': json['range'] == null ? undefined : json['range'],
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'online': json['online'] == null ? undefined : json['online'],
    };
}

export function AreaInDTOHoursRangeInnerToJSON(value?: AreaInDTOHoursRangeInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start': value['start'],
        'end': value['end'],
        'range': value['range'],
        'disabled': value['disabled'],
        'online': value['online'],
    };
}

