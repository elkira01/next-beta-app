'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function AvatarUploadPage() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);
    return (
        <>
            <h1>Upload Your Avatar</h1>

            <form
                className='border border-gray-300 p-5 rounded-md space-x-6'
                onSubmit={async (event) => {
                    event.preventDefault();

                    if (!inputFileRef.current?.files) {
                        throw new Error('No file selected');
                    }

                    const file = inputFileRef.current.files[0];
                    const formData = new FormData();
                    formData.append('image', file);

                    const response = await axios.post(
                        `http://localhost:8000/api/upload-image`,
                        formData
                    );

                    setBlob(response.data);
                }}
            >
                <input
                    className='border border-dashed rounded-md p-2.5'
                    name='file'
                    ref={inputFileRef}
                    type='file'
                    accept='image/jpeg, image/png, image/webp'
                    // required
                />
                <button
                    type='submit'
                    className='bg-black text-white font-bold p-2.5 rounded-md'
                >
                    Upload
                </button>
            </form>
            {blob && (
                <div>
                    Blob url: <a href={blob.url}>{blob.url}</a>
                </div>
            )}
        </>
    );
}
