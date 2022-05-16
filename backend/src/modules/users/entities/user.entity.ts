import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../types/user-role.type";

@Entity()
export class User extends BaseEntity {

  constructor(username?: string, password?: string, salt?: string, role?: UserRole) {
    super()
    this.username = username
    this.password = password
    this.salt = salt
    this.role = role
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  username: string
  
  @Column()
  password: string
  
  @Column()
  salt: string
  
  @Column({ enum: true })
  role: UserRole

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deleteAt: Date
}