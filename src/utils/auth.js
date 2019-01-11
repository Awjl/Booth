import Cookies from "js-cookie";

const UserID = "UserID";
const industryOne = "industryOne";
const industryTwo = "industryTwo";
// 用户ID
export function getUser() {
  return Cookies.get(UserID);
}

export function setUser(id) {
  return Cookies.set(UserID, id);
}
// 一级行业
export function getOne() {
  return Cookies.get(industryOne);
}

export function setOne(One) {
  return Cookies.set(industryOne, One);
}
// 二级行业
export function getTwo() {
  return Cookies.get(industryTwo);
}

export function setTwo(Two) {
  return Cookies.set(industryTwo, Two);
}