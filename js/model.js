import { BITLY_TOKEN } from "./config";

export const getShortLink = async function (url) {
  try {
    const requestBody = {
      long_url: url,
      domain: "bit.ly",
    };

    const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BITLY_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) throw new Error(`Error ${res.statusText} (${res.status})`);

    const data = await res.json();
    return data.link;
  } catch (err) {
    throw err;
  }
};
