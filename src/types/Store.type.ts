import User from "./User.type";

export default interface Store {
    isLoading: boolean,
    authUser: User,
}