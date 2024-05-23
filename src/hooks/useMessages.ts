import { useQuery } from "@tanstack/react-query"
import messageService from "../services/messageService"
import AuthToken from "../entities/AuthToken";

const useMessage = (userId: string, token: AuthToken) => useQuery({
  queryKey: ['messages', userId],
  queryFn: () => messageService.getList(token)
})

export default useMessage;