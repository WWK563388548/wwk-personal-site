"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 6,
    text: "Years of experience"
  },
  {
    num: 9,
    text: "Years of living in Japan"
  },
  {
    num: 10,
    text: "technologies hands-on experience"
  },
  {
    num: 1000,
    text: "commits/year, at least"
  },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, i) => {
            return (
              <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={i}>
                <CountUp 
                  end={item.num} 
                  duration={5} 
                  delay={2} 
                  className="text-3xl xl:text-5xl font-extrabold"
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                  {item.text}
                </p>
              </div>
            )
         })}
        </div>
      </div>
    </section>
  )
}

export default Stats