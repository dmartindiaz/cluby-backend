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
 * @interface UserInDTO
 */
export interface UserInDTO {
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    surname: string;
    /**
     * 
     * @type {number}
     * @memberof UserInDTO
     */
    phone?: number;
    /**
     * 
     * @type {number}
     * @memberof UserInDTO
     */
    phonecode?: number;
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    lastConnect?: string;
    /**
     * 
     * @type {number}
     * @memberof UserInDTO
     */
    age?: number;
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof UserInDTO
     */
    role: UserInDTORoleEnum;
}


/**
 * @export
 */
export const UserInDTORoleEnum = {
    Admin: 'admin',
    Client: 'client'
} as const;
export type UserInDTORoleEnum = typeof UserInDTORoleEnum[keyof typeof UserInDTORoleEnum];


/**
 * Check if a given object implements the UserInDTO interface.
 */
export function instanceOfUserInDTO(value: object): value is UserInDTO {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('surname' in value) || value['surname'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function UserInDTOFromJSON(json: any): UserInDTO {
    return UserInDTOFromJSONTyped(json, false);
}

export function UserInDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'surname': json['surname'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'phonecode': json['phonecode'] == null ? undefined : json['phonecode'],
        'email': json['email'],
        'created': json['created'] == null ? undefined : json['created'],
        'lastConnect': json['lastConnect'] == null ? undefined : json['lastConnect'],
        'age': json['age'] == null ? undefined : json['age'],
        'password': json['password'],
        'role': json['role'],
    };
}

export function UserInDTOToJSON(value?: UserInDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'surname': value['surname'],
        'phone': value['phone'],
        'phonecode': value['phonecode'],
        'email': value['email'],
        'created': value['created'],
        'lastConnect': value['lastConnect'],
        'age': value['age'],
        'password': value['password'],
        'role': value['role'],
    };
}

