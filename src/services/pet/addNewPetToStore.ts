import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ServiceUrl, Environments } from '../../setup/enum';
import { Pet } from '../../setup/types'
import * as dotenv from 'dotenv';

dotenv.config();

jest.setTimeout(150000);
const ENV = process.env.NODE_ENV as Environments;

interface AddNewPetToStorType {
    petName: string;
    status: "available" | "sold" 
}


export const addNewPetToStore = async ({ petName, status }: AddNewPetToStorType): Promise<AxiosResponse> => {

    const data:Pet = {
        "id": 0,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": petName,
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": status
    }
    const config: AxiosRequestConfig = {
        method: 'post',
        url: `${ServiceUrl[ENV]}/pet`, 
        data
    };

    const response = await axios(config);
    return response;
};