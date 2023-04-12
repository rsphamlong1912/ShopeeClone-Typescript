import { User } from './user.types'
import { SuccessResponse } from './utils.types'
export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
