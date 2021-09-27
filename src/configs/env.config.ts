interface IConfig {
    url: string;
    key: string;
}

export const CONFIG: IConfig = {
    url: process.env.REACT_APP_API_URL || '',
    key: process.env.REACT_APP_API_KEY || '',
}