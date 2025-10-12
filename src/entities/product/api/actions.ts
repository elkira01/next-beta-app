import { DELETE, GET, POST, PUT } from '@/shared/api/fetch';

export const fetchProductCollection = async (query?: any) =>
    await GET('/api/v1/products', null, query);

export const fetchProductById = async (id: any) =>
    await GET('/api/v1/products/{id}', { id });

export const fetchProductBySlug = async (slug: any) =>
    await GET('/api/v1/products/slug/{slug}', { slug });

export const createdProduct = async (payload: any) =>
    await POST('/api/v1/products', payload);

export const updateProduct = async (payload: any) =>
    await PUT('/api/v1/products', payload);

export const deleteProduct = async (id: any) =>
    await DELETE('/api/v1/products/{id}', { id });
