import React from "react";
import Heading from "../layout/heading";

export default function Hero() {
  return (
    <section className="flex h-screen w-full flex-col  justify-end py-6">
      <Heading
        as="h1"
        size="md"
        className="font-neue max-w-screen-lg font-bold uppercase leading-[5rem]"
      >
        Khend Pauner
      </Heading>
      <Heading
        as="h1"
        size="sm"
        className="font-eiko max-w-screen-md font-thin uppercase leading-[5rem]"
      >
        Frontend developer and designer
      </Heading>
    </section>
  );
}
