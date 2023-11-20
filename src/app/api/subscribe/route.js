import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log(body);

  const formData = new URLSearchParams();
  Object.keys(body).forEach((key) => {
    formData.append(key, body[key]);
  });

  try {
    // Forward the request to Mailchimp
    const response = await fetch(
      "https://thisisfuture.us12.list-manage.com/subscribe/post-json?u=6b5a75b2e5f0566c42a9780d6&id=11ab22ccdc",
      {
        method: "POST", // or 'GET', depending on Mailchimp's requirement
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      console.log("response not ok");
      throw new Error(`Error: ${response.status}`);
    }

    // Send back the response
    const data = await response.json();
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
