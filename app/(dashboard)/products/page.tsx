import { createdProduct } from '@/entities/product/api/actions';

export default async function Page() {
    const res = await createdProduct({
        title: 'New Product',
        price: 10,
        description: 'A description',
        categoryId: 1,
        images: ['https://placehold.co/600x400'],
    });

    console.log(res);

    return <div>PRODUCTS</div>;
}
