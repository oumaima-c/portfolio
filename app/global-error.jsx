"use client";

import Error from "next/error";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <Error statusCode={undefined} />
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}