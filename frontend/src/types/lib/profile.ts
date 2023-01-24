export interface Introduce {
    introduce?: string;
    address?: string;
    number?: string;
}

export interface UserImage {
    id: number;
}

export interface Take {
    take?: number;
}

export interface AbilityType {
    id?: number;
    name: string;
    position?: string;
    address?: string;
    start?: string;
    end?: string;
}

export interface SchoolType {
    id?: number;
    name: string;
    start?: string;
    end?: string;
    status?: boolean;
}

export interface UniversityType {
    id?: number;
    name: string;
    major?: string;
    degree?: string;
    start?: string;
    end?: string;
}
