import { UserDetailsInterface } from "../interfaces/auth.interface";

export const currentUsers: UserDetailsInterface[] = [
  {
    id: "1",
    username: "secondbite",
    name: "SecondBite",
    email: "secondbite@gmail.com",
    products: [
      productCode.classic,
      productCode.classic,
      productCode.standOut,
      productCode.premium,
    ],
  },
  {
    id: "2",
    username: "axil",
    name: "Axil Coffee Roasters",
    email: "axil@gmail.com",
    products: [
      productCode.classic,
      productCode.standOut,
      productCode.standOut,
      productCode.premium,
    ],
  },
  {
    id: "3",
    username: "myer",
    name: "MYER",
    email: "myer@gmail.com",
    products: [
      productCode.classic,
      productCode.standOut,
      productCode.premium,
      productCode.premium,
    ],
  },
  {
    id: "4",
    username: "a",
    name: "user a",
    email: "userA@gmail.com",
    products: [productCode.classic, productCode.standOut, productCode.premium],
  },
  {
    id: "5",
    username: "asdf",
    name: "user asdf",
    email: "userASDF@gmail.com",
    products: [productCode.classic, productCode.standOut, productCode.premium],
  },
];

export const tokens = [
  {
    username: "secondbite",
    token: "secondbitetoken",
  },
  {
    username: "axil",
    token: "axiltoken",
  },
  {
    username: "myer",
    token: "myertoken",
  },
  {
    username: "a",
    token: "atoken",
  },
  {
    username: "asdf",
    token: "asdftoken",
  },
];
