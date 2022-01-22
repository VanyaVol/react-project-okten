import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[A-Za-zА-яІіЇї]{1,20}$')).required().messages({
        "string.empty": 'Поле не може бути пустим',
        "string.pattern.base": 'Поле не має містити цифри та має бути менше за 20 символів'
    }), year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "number.base": 'Поле має містити рік',
        "number.min": 'Дата не менша ніж 1990 рік',
        "number.max": `Дата не більша ніж поточний рік: ${new Date().getFullYear().toString()}`
    }), price: Joi.number().min(0).max(1000000).required().messages({
        "number.base": 'Поле має містити ціну',
        "number.min": 'Поле не може бути менше 0',
        "number.max": 'Поле не може бути більшим за 1 000 000'
    })
});