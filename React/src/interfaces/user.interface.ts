enum UserRole {
    admin="admin",
    member="member"
}

enum UserStatus {
    active="active",
    inactive="inactive"
}

interface ip {
    id: number;
    ip: string;
    userId: number;
    user: User
}

export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
    role: UserRole;
    createAt: string;
    updateAt: string;
    avatar: string;
    status: UserStatus;
    ipList: ip[]
}

export interface UserCreate {
    name: string;
    password: string;
    email: string;
    avatar: string;
}