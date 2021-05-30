interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
class Profile {
  readonly id: string;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  profilePic?: string;
  constructor(
    name: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    profilePic?: string
  ) {
    this.id = new Date().toString() + Math.random();
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.profilePic = profilePic;
  }
}

export default Profile;
