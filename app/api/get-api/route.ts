// app/api/get-ip/route.ts
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const cfIp = req.headers.get('cf-connecting-ip');

    const ip = 
      realIp ||
      (forwardedFor ? forwardedFor.split(',')[0].trim() : undefined) ||
      cfIp ||
      'IP address not available';

    return new Response(
      JSON.stringify({ 
        ip,
        headers: {
          'x-real-ip': realIp,
          'x-forwarded-for': forwardedFor,
          'cf-connecting-ip': cfIp
        }
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      }
    );
  } catch (error) {
    console.error('Error getting IP:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to get IP address' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}