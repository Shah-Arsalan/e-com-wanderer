import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "tent",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "sleepingBag",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    description: "",
  },
];
