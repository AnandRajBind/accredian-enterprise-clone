import { NextResponse } from 'next/server';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '@/constants/faqs.constants';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let filtered = FAQ_ITEMS;
    if (category) {
      filtered = FAQ_ITEMS.filter((item) => item.category === category);
    }

    await new Promise((resolve) => setTimeout(resolve, 200));

    return NextResponse.json(
      {
        success: true,
        categories: FAQ_CATEGORIES,
        data: filtered,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch FAQ content' },
      { status: 500 }
    );
  }
}
