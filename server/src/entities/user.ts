// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
//   OneToMany,
//   JoinColumn,
//   Index,
// } from 'typeorm';

// @Entity({name: 'user'})
// @Index('IDX_super_admin_unique', ['role'], {
//   unique: true,
//   where: "role = 'super_admin'",
// })
// export class User {
//   @PrimaryGeneratedColumn('uuid')
//   id!: string;

//   @Column()
//   name!: string;

//   @Column({unique: true})
//   email!: string;

//   @Column({select: false})
//   password!: string;

//   @Column({
//     type: 'enum',
//     enum: ['super_admin', 'admin', 'staff'],
//     default: 'staff',
//   })
//   role!: 'super_admin' | 'admin' | 'staff';

//   // For staff users - which shop they belong to
//   @ManyToOne(() => Shop, shop => shop.staff, {
//     onDelete: 'CASCADE',
//     nullable: true,
//   })
//   @JoinColumn({name: 'shopId'})
//   shop!: Shop;

//   @Column({nullable: true})
//   shopId!: string;

//   // For admin users - tracks the super admin who created them (there's only one super admin)
//   @ManyToOne(() => User, user => user.createdAdmins, {
//     onDelete: 'SET NULL',
//     nullable: true,
//   })
//   @JoinColumn({name: 'createdById'})
//   createdBy!: User;

//   @Column({nullable: true})
//   createdById!: string;

//   // For the super admin - all admins they created
//   @OneToMany(() => User, user => user.createdBy)
//   createdAdmins!: User[];

//   // For admin users - shops they own
//   @OneToMany(() => Shop, shop => shop.owner)
//   ownedShops!: Shop[];

//   // Bills created by this user (staff or admin)
//   @OneToMany(() => Bill, bill => bill.createdBy)
//   bills!: Bill[];

//   @CreateDateColumn({
//     name: 'created_at',
//     type: 'timestamptz',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   createdAt!: Date;

//   @UpdateDateColumn({
//     name: 'updated_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//     onUpdate: 'CURRENT_TIMESTAMP',
//   })
//   updatedAt!: Date;
// }
