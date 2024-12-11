import React from "react";

export default function Socials() {
  return (
    <section className="flex justify-center">
      <a
        title="open-source projects"
        href="https://github.com/imkarimkarim"
        target="_blank"
      >
        <img
          src="/logos/github.svg"
          className="dark:invert w-7 h-7 mx-5 ml-0"
          alt="karims github page"
        />
      </a>
      <a
        title="X(twitter) profile"
        href="https://x.com/imkarimkarim"
        target="_blank"
      >
        <img
          src="/logos/x.svg"
          className="dark:invert w-7 h-7 mx-5"
          alt="karims X(twitter) account"
        />
      </a>
      <a
        title="YouTube channel"
        href="https://www.youtube.com/@imkarimkarim"
        target="_blank"
      >
        <img
          src="/logos/youtube.svg"
          className="w-7 h-7 mx-5"
          alt="karims youtube channel"
        />
      </a>
    </section>
  );
}