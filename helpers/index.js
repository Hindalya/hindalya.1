import { LoginUserParams } from "../types";
import { InputErrors } from "../types/error";
import { signIn } from "auth-lib"; // Assuming the signIn function is imported from a library called "auth-lib"

export const getErrorMsg = (key, errors) => {
  if (errors.find(err => err.hasOwnProperty(key) !== undefined)) {
    const errorObj = errors.find(err => err.hasOwnProperty(key));
    return errorObj && errorObj[key];
  }
};

export const loginUser = async ({ email, password }) => {
  const res = await signIn("credentials", {
    redirect: false,
    email,
    password
  });

  return res;
};
