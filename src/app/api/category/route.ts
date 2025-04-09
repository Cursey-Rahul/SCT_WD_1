import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();


export const GET = async () => {
    try {
        const category= await prisma.category.findMany();
        return new NextResponse(JSON.stringify(category),{status: 200});
        
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Error fetching categories" }), { status: 500 });

        
    }
}