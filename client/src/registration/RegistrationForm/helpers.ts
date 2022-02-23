export enum PasswordFormActionKind {
    pwd = 'pwd',
    confirmPwd ='confirmPwd',
    email = 'email'
}

type TFormValueObject = {
    value: string;
    touched: boolean;
    error: boolean;
}

export interface IPasswordAction {
    type: string,
    payload: TFormValueObject
}

export interface IPasswordState {
    email: TFormValueObject,
    pwd: TFormValueObject,
    confirmPwd: TFormValueObject,
    isValid: boolean
}


export const initState: IPasswordState = {
    email: {
        value: '',
        touched: false,
        error: false
    },
    pwd: {
        value: '',
        touched: false,
        error: false
    },
    confirmPwd: {
        value: '',
        touched: false,
        error: false
    },
    isValid: false
}


