export const validateEmail = (value: string) => {
    return value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};

export const validateName = (value: string) => {
    return value.length > 5;
};

export const validateMessage = (value: string) => {
    return value.length > 15;
};
