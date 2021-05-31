interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export class Address implements IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  constructor(street: string, suite: string, city: string, zipcode: string) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
  }
}

class Profile {
  id: string;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  profilePic?: string;
  constructor(
    id: string,
    name: string,
    email: string,
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    phone: string,
    website: string,
    profilePic?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = new Address(street, suite, city, zipcode);
    this.phone = phone;
    this.website = website;
    this.profilePic = profilePic || '';
  }
}

export default Profile;
