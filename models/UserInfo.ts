export default class UserInfo {
    username: string
    email: string
    password: string

    characterChoice: number
    themeChoice: string
    audioChoice: boolean

    primaryColor!: string            // TODO: Remove these and create a function/service that
    secondaryColor!: string                // sets these according to themeChoice prop below
    thirdColor!: string

    wins: number
    losses: number
    ko: number
    constructor(username: string, email: string, password: string, characterChoice: number,
        themeChoice: string, audioChoice: boolean, wins: number, losses: number, ko: number){
        this.username = username;
        this.email = email;
        this.password = password;
        this.characterChoice = characterChoice
        this.themeChoice = themeChoice
        this.audioChoice = audioChoice
        this.setColors(themeChoice);
        this.wins = wins
        this.losses = losses
        this.ko = ko
    }

    setColors(themeChoice: string){
        if (themeChoice == '#fa7a70'){
            this.primaryColor = '#fa7a70';
            this.secondaryColor = 'white';
            this.thirdColor = '#f76f6c'
        }
        else {                              // TODO: Modify with other colors later
            this.primaryColor = '#fa7a70';
            this.secondaryColor = 'white';
            this.thirdColor = '#f76f6c'
        }
    }

    setAllProps(username: string, email: string, password: string, characterChoice: number,
        themeChoice: string, audioChoice: boolean, wins: number, losses: number, ko: number){
        this.username = username;
        this.email = email;
        this.password = password;
        this.characterChoice = characterChoice
        this.themeChoice = themeChoice
        this.audioChoice = audioChoice
        this.setColors(themeChoice);
        this.wins = wins
        this.losses = losses
        this.ko = ko
        }
    
    getAllProps() {
        return {
            username: this.username,
            email: this.email,
            password: this.password,
            characterChoice: this.characterChoice,
            themeChoice: this.themeChoice,
            audioChoice: this.audioChoice,
            wins: this.wins,
            losses: this.losses,
            ko: this.ko,
        }
    }
}