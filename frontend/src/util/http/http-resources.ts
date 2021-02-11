import { AxiosInstance, AxiosResponse } from 'axios'

export default class HttpResource{
    /**
     * 
     * @param http 
     * @param resource 
     */
    constructor(protected http: AxiosInstance, protected resource) {
    } 
    list<T = any>(): Promise<AxiosResponse<T>>{
        return this.http.get<T>(this.resource);
    }
    //show
    get<T = any>(id): Promise<AxiosResponse<T>>{
        return this.http.get<T>(` ${this.resource}/${id}`);
    }
    create<T = any>(data): Promise<AxiosResponse<T>>{
        return this.http.post<T>(this.resource, data);
    }
    update<T = any>(id, data): Promise<AxiosResponse<T>>{
        return this.http.put<T>(`${this.resource}/${id}`, data);
    }
    delete<T = any>(id): Promise<AxiosResponse<T>>{
        return this.http.delete<T>(`${this.resource}/${id}`);
    }
}