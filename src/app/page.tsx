"use client";
import { useState } from "react";
import EmotionRadarChart from "./component/chart";

export default function Home() {
  const [text, setText] = useState<string>();
  const [emotion, setEmotion] = useState<string[]>([]);
  const [emotionScores, setEmotionScores] = useState<number[]>([]);
  const handleClassify = (e: React.FormEvent) => {
    e.preventDefault();
    const fetchData = async () => {
      const res = await fetch(
        "https://emotion-backend-5af8.onrender.com/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        },
      );

      const data = await res.json();
      setEmotion(data.emotion_label);
      setEmotionScores(data.emotion_scores);
      console.log(data);
    };

    fetchData();
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pt-14">
      <h1 className="text-gibraltar font-pixelify text-4xl">
        Emotion Classification
      </h1>
      <section className="flex flex-col w-full justify-center items-center gap-4">
        <EmotionRadarChart emotion_score={emotionScores} />
        <div className="flex w-full justify-center gap-4">
          <div className="h-[40px] flex w-full justify-center">
            {emotion.map((emo, index) => (
              <h2
                key={index}
                className="text-redlight font-pixelify text-4xl"
                style={{
                  textShadow: `
                -2px -2px 0 #143951,  
                2px -2px 0 #143951,
                -2px 2px 0 #143951,
                2px 2px 0 #143951
              `,
                }}
              >
                {emo}
                {index !== emotion.length - 1 && `,${"\u00A0"}`}
              </h2>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleClassify}
          className="flex flex-col items-center w-full gap-4"
        >
          <textarea
            placeholder="Your Emotion text..."
            onChange={(e) => setText(e.target.value)}
            className="w-full max-w-3xl text-center text-[20px] px-6 py-3 bg-white border-[4px] border-gibraltar placeholder:text-gibraltar text-gibraltar font-pixelify focus:outline-none rounded-lg min-h-[60px] max-h-[200px]"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-gibraltar text-white text-[20px] border-[2px] border-white outline-[4px] outline-gibraltar hover:bg-blueheaven hover:outline-blueheaven cursor-pointer rounded-lg shadow-lg font-pixelify transition"
          >
            Clssify!
          </button>
        </form>
      </section>
    </div>
  );
}
