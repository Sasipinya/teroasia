'use client';

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-8">เข้าสู่ระบบ</h1>
        <div className="space-y-4">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Image
              src="/google-icon.png"
              alt="Google"
              width={24}
              height={24}
            />
            <span>เข้าสู่ระบบด้วย Google</span>
          </button>

          <button
            onClick={() => signIn('facebook', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#1874E8] transition-colors"
          >
            <Image
              src="/facebook-icon.png"
              alt="Facebook"
              width={24}
              height={24}
            />
            <span>เข้าสู่ระบบด้วย Facebook</span>
          </button>

          <button
            onClick={() => signIn('line', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-[#00B900] text-white rounded-lg hover:bg-[#00A000] transition-colors"
          >
            <Image
              src="/line-icon.png"
              alt="Line"
              width={24}
              height={24}
            />
            <span>เข้าสู่ระบบด้วย Line</span>
          </button>
        </div>
      </div>
    </div>
  );
}