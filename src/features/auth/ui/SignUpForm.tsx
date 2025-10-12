'use client';

import { FormContainer } from '@/shared/ui/layouts/FormContainer';
import { useForm } from '@tanstack/react-form';
import React, { useState } from 'react';
import { registerAction } from '@/features/auth/api';
import { TextInput } from '@/shared/ui/forms/ui/TextInput';
import { z } from 'zod';
import { parseZodError } from '@/shared/ui/forms/lib/validation-helpers';
import { SpinnerCircularFixed } from 'spinners-react';
import { useRouter } from 'next/navigation';
import { RoutePaths } from '@/shared/configs/routes';
import { useAuth } from '@/features/auth/ui/use-auth';

const registerSchema = z.object({
    username: z.string().min(1),
    email: z.email(),
    password: z.string().min(6),
});
export default function SignUpForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();
    const { register } = useAuth();
    const form = useForm({
        defaultValues: {},
        validators: {
            onChange: registerSchema,
        },
        onSubmit: async ({ value }) => await handleSubmit(value),
    });

    const handleSubmit = async (payload: any) => {
        setIsSubmitting(true);

        const resp = await register(payload).finally(() =>
            setIsSubmitting(false)
        );

        if (resp?.success) {
            router.push(RoutePaths.SIGN_IN);
        }
    };

    return (
        <div className='w-full h-full content-center'>
            <div className='mx-auto'>
                <FormContainer title='Sign up'>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();
                        }}
                    >
                        <div className='space-y-6'>
                            <div>
                                <form.Field
                                    name='username'
                                    children={(field) => (
                                        <>
                                            <TextInput
                                                label='User name'
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e: any) =>
                                                    field.handleChange(
                                                        e.target.value
                                                    )
                                                }
                                                errorMsg={parseZodError(
                                                    field.state.meta.errors,
                                                    field.name
                                                )}
                                            />
                                        </>
                                    )}
                                />
                            </div>
                            <div>
                                <form.Field
                                    name='email'
                                    children={(field) => (
                                        <>
                                            <TextInput
                                                type='email'
                                                label='Email'
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e: any) =>
                                                    field.handleChange(
                                                        e.target.value
                                                    )
                                                }
                                                errorMsg={parseZodError(
                                                    field.state.meta.errors,
                                                    field.name
                                                )}
                                            />
                                        </>
                                    )}
                                />
                            </div>
                            <div>
                                <form.Field
                                    name='password'
                                    children={(field) => (
                                        <>
                                            <TextInput
                                                type='password'
                                                label='Password'
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e: any) =>
                                                    field.handleChange(
                                                        e.target.value
                                                    )
                                                }
                                                errorMsg={parseZodError(
                                                    field.state.meta.errors,
                                                    field.name
                                                )}
                                            />
                                        </>
                                    )}
                                />
                            </div>
                            <div className='w-full'>
                                <button
                                    className='bg-black text-white flex justify-center rounded-md h-12 p-2.5 w-full cursor-pointer'
                                    type='submit'
                                >
                                    {isSubmitting && (
                                        <SpinnerCircularFixed
                                            size={30}
                                            thickness={100}
                                            speed={200}
                                            color='#ffffff'
                                            secondaryColor='rgba(0, 0, 0, 0.44)'
                                        />
                                    )}
                                    <span>Submit</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    );
}
