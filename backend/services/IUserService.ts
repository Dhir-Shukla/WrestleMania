export default interface IUserService {
    createAccount(username: string, email: string, password: string, ): Promise<string | undefined>;
    signIn(email: string, password: string, ): Promise<string | undefined>;
}