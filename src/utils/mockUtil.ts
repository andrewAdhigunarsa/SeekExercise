import { currentUsers } from "../configs/mockValues";

export function userExist(username?: string) {
  if (!username) return false;
  const filteredUser = currentUsers.filter(
    (user) => user.username === username
  );
  return filteredUser.length > 0;
}
