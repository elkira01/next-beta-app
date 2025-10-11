import React from 'react';

export const TextInput: React.FC<any> = (props) => {
    const { errorMsg, ...rest } = props;
    return (
        <div className='flex flex-col gap-3 w-full'>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                {...rest}
                className='border border-gray-500 rounded-md border-dashed h-12 p-2.5'
            />
            <em role='alert' className='text-sm text-red-400'>
                {errorMsg}
            </em>
        </div>
    );
};
