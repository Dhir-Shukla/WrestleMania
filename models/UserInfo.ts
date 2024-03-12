export interface UserInfo {
    UserName: string,

    primaryColor: string,            // TODO: Remove these and create a function/service that
    secondaryColor: string,                // sets these according to themeChoice prop below
    thirdColor: string,

    characterChoice: number,
    themeChoice: string,
    audioChoice: boolean,

    Wins: number,
    Losses: number,
    KO: number
}