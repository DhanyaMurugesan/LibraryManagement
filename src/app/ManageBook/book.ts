import { User } from './user';

export interface Book{
    bname:string;
    category:string;
    author:string;
    price:number;
    quantity:number;
    id:number;
    users:User[];
}