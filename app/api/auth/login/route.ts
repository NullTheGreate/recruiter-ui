import { API_END_POINTS } from '@/configs/constants';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email, password } = await request.json();
    const response = await fetch(API_END_POINTS.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

}