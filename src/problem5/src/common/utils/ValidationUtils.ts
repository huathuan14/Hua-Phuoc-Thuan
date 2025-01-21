import { validate } from "class-validator";
import { BaseDTO } from "../../dto/BaseDTO";
import { ClassConstructor, plainToClass } from "class-transformer";

export function handleValidationMessage(errors: any[]) {
    console.log(errors);
    const formattedErrors = errors.reduce((acc, error) => {
        const property = error.property;
        const constraints = error.constraints;

        if (constraints) {
            acc[property] = Object.values(constraints)[0];
        }
        return acc;
    }, {});
    return formattedErrors;
}

export async function validateData(dtoClass: ClassConstructor<BaseDTO>, reqBody: any) {
    const data = plainToClass(dtoClass, reqBody);
    const errors = await validate(data);
    console.log(errors)
    if (errors.length > 0) {
        return [null, handleValidationMessage(errors)];
    }
    return [data, null];
}

