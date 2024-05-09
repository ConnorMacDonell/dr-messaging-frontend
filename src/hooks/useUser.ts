import { useQuery } from "@tanstack/react-query"
import userService from "../services/usersService"

const useUser = (data: string) => useQuery({
  queryKey: ['users', data],
  queryFn: () => userService.get(data)
})

export default useUser;