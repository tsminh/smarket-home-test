declare interface EventData {
    id: number;
    name: string;
    short_name:string;
    start_date: string | undefined;
    end_date: string | undefined;
    description: string;
    created: number;
    state: string;
    type: string;
}