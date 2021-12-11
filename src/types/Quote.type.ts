import User from "./User.type";

export default interface Quote {
    id: number;
    quote: string;
    author: User;
    created_at: string;
}