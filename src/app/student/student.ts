export class Student {
    id = 0;
    firstName = '';
    lastName = '';
    addresses: Address[];
}

export class Address {
    addressLine1 = '';
    addressLine2 = '';
    city = '';
    county = '';
    postcode = '';
}