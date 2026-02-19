import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { address, budget, notes } = await req.json();

  // Tiny realism: simulate thinking
  await new Promise((r) => setTimeout(r, 1200));

  return NextResponse.json({
    id: crypto.randomUUID(),
    address,
    budget,
    notes,
    concept: {
      budgetTier:
        budget < 8000 ? "starter" : budget < 25000 ? "mid" : "premium",
      recommendedFocus:
        budget < 8000
          ? "high-impact, low-cost upgrades"
          : budget < 25000
          ? "full concept + phased build"
          : "premium integrated build (hardscape + features)",
      nextSteps: [
        "Generate concept board image (mock for now)",
        "Draft zone labels + key features",
        "Create starter plant palette (regional)",
        "Return rough cost buckets",
      ],
    },
  });
}

