"use client";

import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function ClientPage() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    getData().then(setJoke);
  }, []);

  return <main>{joke.joke}</main>;
}
