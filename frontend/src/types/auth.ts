export interface Login {
    email: string;
    password: string;
}

export interface Join {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    birth: string;
    gender: "male" | "female";
}
