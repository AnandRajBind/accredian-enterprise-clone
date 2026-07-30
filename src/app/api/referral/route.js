import { NextResponse } from 'next/server';
import { completeReferralSchema } from '@/lib/validations/referral.schema';

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = completeReferralSchema.parse(body);

    await new Promise((resolve) => setTimeout(resolve, 400));

    return NextResponse.json(
      {
        success: true,
        message: 'Referral submitted successfully!',
        data: {
          referralId: `REF-${Date.now().toString().slice(-6)}`,
          timestamp: new Date().toISOString(),
          ...validatedData,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    const errorMessage = err?.errors ? err.errors.map((e) => e.message).join(', ') : 'Invalid referral submission';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 422 });
  }
}
