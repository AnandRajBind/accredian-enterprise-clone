import { NextResponse } from 'next/server';
import { PROGRAM_CATEGORIES, PROGRAMS_DATA } from '@/constants/programs.constants';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let filtered = PROGRAMS_DATA;
    if (category && category !== 'All Programs') {
      filtered = PROGRAMS_DATA.filter((p) => p.category === category);
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(
      {
        success: true,
        categories: PROGRAM_CATEGORIES,
        data: filtered,
        total: filtered.length,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch programs' },
      { status: 500 }
    );
  }
}
