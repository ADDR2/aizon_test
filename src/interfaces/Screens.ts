export interface CreateScreensBody {
    width: number;
    height: number;
    page?: number;
    title?: string;
}

export interface UpdateScreensBody {
    screenId: string;
    width?: number;
    height?: number;
    page?: number;
    title?: string;
}
