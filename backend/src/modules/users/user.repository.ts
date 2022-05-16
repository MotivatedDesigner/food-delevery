import { DBError } from "src/shared/decorators/db-error.decorator"
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  @DBError
  async signUp(username: string, hashedPassword: string, salt: string) {
    const user = new User(username, hashedPassword, salt)
    await user.save()
    return user
  }

}