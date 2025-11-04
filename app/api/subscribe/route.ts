// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const HUBSPOT_API_KEY = process.env.HUBSPOT_ACCESS_TOKEN;
  const HUBSPOT_API_URL = 'https://api.hubapi.com/crm/v3/objects/contacts';

  // HubSpot requires the name to be split into firstname/lastname.
  // We'll put the full name in the firstname field for simplicity.
  const contactData = {
    properties: {
      email: email,
      firstname: name,
    },
  };

  try {
    const response = await fetch(HUBSPOT_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      // If HubSpot returns an error, forward it
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to subscribe.');
    }

    const data = await response.json();
    return NextResponse.json({ message: 'Subscription successful!', data }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}