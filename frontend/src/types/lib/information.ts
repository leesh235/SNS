export interface Job {
    name: string;
    address?: string;
    position?: string;
    start?: string;
    end?: string;
}

export interface School {
    name: string;
    start?: string;
    end?: string;
    status?: boolean;
}

export interface University {
    name: string;
    major?: string;
    degree?: string;
    start?: string;
    end?: string;
    status?: boolean;
}

export interface DeleteInfo {
    id: number;
}
