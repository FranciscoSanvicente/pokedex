export interface IProps {
    search?: string;
    page?: number;
    limit?: number;
    offset?: number;
    filter?: "type" | "region" | "";
    type?: string;
    region?: string;
}