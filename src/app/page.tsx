'use client'

import { Card, ICardData } from "./components/Card/Card";


const cardData: ICardData = {
  name: "Sarah Dole",
  handle: "@saradole",
  text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
}

export default function Home() {
  return (
    <main className="">
      <Card data={cardData} />
    </main>
  );
}


