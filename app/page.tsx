"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Login from './api/auth/login/page';

export default function Home() {
  return (
    <div className="box">
      <Login></Login>
    </div>
  );
}