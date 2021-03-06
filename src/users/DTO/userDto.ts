import {
    IsNotEmpty,
    IsEmail
} from 'class-validator';

export class userDto{

    @IsNotEmpty()
    User_id: number; 

    @IsNotEmpty()
    Name : string;

    @IsNotEmpty()
    Phone: string;

    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    @IsEmail()
    Verifymail: string;

    Deleted : boolean;

    createdOn?: Date;
}

