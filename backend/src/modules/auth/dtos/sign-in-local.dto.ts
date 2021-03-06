import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignInLocalDto {

  @IsString()
  readonly username: string

  @IsString()
  readonly password: string

}