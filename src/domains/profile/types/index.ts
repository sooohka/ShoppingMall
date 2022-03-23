import { BaseEntity } from "@Types/BaseEntity";

type Address = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
};

type User = {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address | null;
  phone: string;
} & BaseEntity;

export type { User };
