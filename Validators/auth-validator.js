const { z } = require('zod')

const signupValidation = z.object({
    username: z.string({ required_error: 'Username is required' })
        .trim()
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username must be at most 20 characters long'),

    email: z.string({ required_error: 'Email is required' })
        .trim()
        .email('Invalid email format')
        .min(3, 'Email must be at least 3 characters long')
        .max(30, 'Email must be at most 30 characters long')
        .refine((val) => val.endsWith('.com'), {
            message: 'Email must end with .com'
        }),

    phone: z.string({ required_error: 'Phone number is required' })
        .trim()
        .regex(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits'),

    password: z.string({ required_error: 'Password is required' })
        .trim()
        .min(6, 'Password must be at least 6 characters long')
        .max(1024, 'Password must be at most 1024 characters long'),
})

const signinValidation = z.object({
    email: z.string({ required_error: 'Email is required' })
        .trim()
        .email('Invalid email format')
        .min(3, 'Email must be at least 3 characters long')
        .max(30, 'Email must be at most 30 characters long')
        .refine(val => val.endsWith('.com'), {
            message: 'Email must end with .com'
        }),

    password: z.string({ required_error: 'Password is required' })
        .trim()
        .min(6, 'Password must be at least 6 characters long')
        .max(1024, 'Password must be at most 1024 characters long'),
})

module.exports = { signupValidation, signinValidation }
