import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignInLocalDto {

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly username: string

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: "Password is weak" }
  )
  readonly password: string

}