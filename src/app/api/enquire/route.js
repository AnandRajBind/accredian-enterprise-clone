import { NextResponse } from 'next/server';
import { enquireSchema } from '@/lib/validations/enquire.schema';

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = enquireSchema.parse(body);

    await new Promise((resolve) => setTimeout(resolve, 400));

    return NextResponse.json(
      {
        success: true,
        message: 'Corporate demo inquiry received!',
        data: {
          inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
          timestamp: new Date().toISOString(),
          ...validatedData,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    const errorMessage = err?.errors ? err.errors.map((e) => e.message).join(', ') : 'Invalid corporate lead submission';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 422 });
  }
}
