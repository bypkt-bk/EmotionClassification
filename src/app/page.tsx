export default function Home() {
  const emotion: string[] = ["sad", "fear", "anger"];
  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-32 pt-20">
      <h1 className="text-gibraltar font-pixelify text-4xl">
        Emotion Classification
      </h1>
      <section className="flex flex-col w-full justify-center gap-8">
        <div className="flex w-full justify-center gap-4">
          {emotion.map((emo, index) => (
            <h3 key={index} className="text-gibraltar font-pixelify text-3xl">
              {emo}
              {index !== emotion.length - 1 && ","}
            </h3>
          ))}
        </div>
        <form className="flex flex-col items-center w-full gap-4">
          <textarea
            placeholder="Your Emotion text..."
            className="w-full max-w-3xl text-center text-[20px] px-6 py-3 bg-white border-[4px] border-gibraltar placeholder:text-gibraltar text-gibraltar font-pixelify focus:outline-none rounded-lg min-h-[60px] max-h-[300px]"
          ></textarea>
          <button className="px-6 py-2 bg-gibraltar text-white text-[20px] border-[2px] border-white outline-[4px] outline-gibraltar hover:bg-blueheaven hover:outline-blueheaven cursor-pointer rounded-lg shadow-lg font-pixelify transition">
            Clssify!
          </button>
        </form>
      </section>
    </div>
  );
}
