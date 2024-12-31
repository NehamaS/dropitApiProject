import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ServiceUrl, Environments } from '../../setup/enum';
import { Pet } from '../../setup/types'
import * as dotenv from 'dotenv';

dotenv.config();

jest.setTimeout(150000);
const ENV = process.env.NODE_ENV as Environments;

interface FindPetsByStatusType {
    status: "available" | "sold" | "pending"
}

export const findPetsByStatus = async ({ status }: FindPetsByStatusType): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: `${ServiceUrl[ENV]}/pet/findByStatus/${status}`, 
    };

    const response = await axios(config);
    return response;
};