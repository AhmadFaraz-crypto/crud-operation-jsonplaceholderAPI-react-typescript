export interface PostPayload {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface Notification {
    msg: string;
    color: string;
}