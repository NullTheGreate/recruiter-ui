// app/login/page.tsx
"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Login from './api/auth/login/page';

export default function Home() {
  return (
    <><div></div><Login></Login></>
  );
}