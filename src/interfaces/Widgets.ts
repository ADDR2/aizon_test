export interface CreateWidgetBody {
    width: number;
    height: number;
    type: string;
};

export interface UpdateWidgetBody {
    width?: number;
    height?: number;
    type?: string;
}
