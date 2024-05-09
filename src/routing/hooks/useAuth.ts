import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  if (!localStorage['accessToken']) return { user: null };

  const user = jwtDecode(localStorage['accessToken']);

  return {user: user};
}

export default useAuth;