import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '../enums/user.enum';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ description: 'Primary Key as UserID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The User Name', example: 'John Doe' })
  @Column()
  name: string;

  @ApiProperty({
    description: 'User Email Address',
    example: 'john.doe@email.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'User Hashed Password' })
  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @ApiProperty({ description: 'When user was created' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'When user was updated' })
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
