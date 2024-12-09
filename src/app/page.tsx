"use client";

import Head from "@/components/Head";
import Socials from "@/components/Socials";
import { useEffect } from "react";

export default function Home() {
  // TODO react
  useEffect(() => {
    let flag = true;
    const workedEl = document.getElementById("worked");
    function animateSteps() {
      let steps = 3;
      let dots = "";

      for (let i = 0; i < steps; i++) {
        setTimeout(function () {
          if (!flag) return;
          dots += ".";
          if (workedEl) {
            workedEl.innerText = dots;
          }
        }, 400 * (i + 1));
      }
    }
    const iv = setInterval(() => {
      animateSteps();
    }, 1200);

    fetch("https://api.github.com/users/imkarimkarim")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        const bio = data.bio;
        const worked = bio.split(",")[1].slice(1);
        flag = false;
        clearInterval(iv);
        if (workedEl) {
          workedEl.innerText = "who " + worked;
        }
        const tooltip = document.getElementById("tooltip");
        if (tooltip) {
          tooltip.style.display = "inline-block";
        }
      })
      .catch((err) => {
        console.error(err);
        flag = false;
        clearInterval(iv);
        if (workedEl) {
          workedEl.innerText = "";
        }
      });

    const wave = document.querySelector(".wave");
    if (wave) {
      wave.addEventListener("click", () => {
        wave.classList.remove("wave");
        // @ts-ignore
        void wave.offsetWidth; // Trigger a reflow
        wave.classList.add("wave");
      });
    }
  }, []);

  return (
    <>
      <Head title="karim, internet crawler 🔭" />
      <main className="flex flex-col gap-2 h-screen w-full justify-center align-middle">
        <div className="text-center">
          <a
            title="do not click on me!"
            target="_blank"
            href="https://www.reddit.com/r/ProgrammerHumor/comments/12hl37d/god_why_is_coding_chess_so_hard/"
          >
            <img
              className="w-32 h-32 dark:w-24 dark:h-24 inline m-2 dark:m-6 mix-blend-darken dark:mix-blend-normal"
              width={516}
              height={516}
              src="/images/avatar.webp"
              alt="karim avatar"
            />
          </a>
          <h1 className="text-xl lg:text-2xl font-bold m-2">
            what's up,
            <img
              title="Hiiiiiiiiiiiiiiii!"
              className="w-7 h-7 sm:w-8 sm:h-8 inline wave mr-1"
              width={100}
              height={100}
              src="/emojis/waving-hand.webp"
              alt="👋"
            />
            <span className="karim-daghan" id="karim-daghan">
              <span className="underline ps-2 cursor-default">im karim</span>.
              <span className="karim-daghan-preview w-60 text-sm cursor-pointer">
                <img
                  onClick={() => {
                    window.open("/images/karim-daghan.jpg");
                  }}
                  title="karim daghan"
                  className="sm:w-full"
                  width={640}
                  height={640}
                  src="/images/karim-daghan.jpg"
                  alt="karim daghan"
                />
              </span>
            </span>
          </h1>
          <span className="text-lg lg:text-xl">
            a internet crawler{" "}
            <a target="_blank" href="https://t.me/crawlingoutgrowth">
              <img
                title="crawling outgrowth 🔭 telegram channel"
                className="w-5 h-5 sm:w-6 sm:h-6 inline mr-1 transform -scale-x-100"
                width={100}
                height={100}
                src="/emojis/telescope.webp"
                alt="🔭"
              />
            </a>
            <p className="text-base lg:text-xl">Front-End developer</p>
            <p className="text-base lg:text-xl font-light dark:font-extralight">
              and Linux user
            </p>
          </span>
          <a
            title="WakaTime stats"
            target="_blank"
            href="https://wakatime.com/@imkarimkarim"
          >
            <span
              className="text-xs lg:text-base font-light dark:font-extralight"
              id="worked"
            >
              ...
            </span>
          </a>
          <span className="tooltip" id="tooltip">
            <img
              className="w-4 h-4 inline mx-1 mb-[2px] transform -scale-x-100"
              width={47}
              height={47}
              src="/emojis/info.webp"
              alt="info"
            />
            <span className="tooltiptext text-sm cursor-auto">
              <h3>
                This Info May Not Be Accurate! <br />
                <span
                  onClick={() => {
                    alert(
                      "This information is being updated every 15 minutes by a script, running on my local machine. Due to Internet restrictions set by the government in Iran, there may be instances where the script cannot perform well."
                    );
                  }}
                  className="underline cursor-pointer"
                >
                  (Read More)
                </span>
              </h3>
            </span>
          </span>
        </div>
        <br />
        <Socials />
      </main>
    </>
  );
}
