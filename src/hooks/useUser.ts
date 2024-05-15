import { useQuery } from "@tanstack/react-query"
import userService from "../services/usersService"
import AuthToken from "../entities/AuthToken";

const useUser = (data: string, token: AuthToken) => useQuery({
  queryKey: ['users', data],
  queryFn: () => userService.get(data, token)
})

export default useUser;