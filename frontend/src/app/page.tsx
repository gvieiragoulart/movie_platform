import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black"></div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            TESTE
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            DESCRICAO FODA
          </p>

          <button className="w-24 rounded-full bg-white px-4 py-2 font-bold text-black md:w-32 lg:w-40">
            Play
          </button>

          <button className="w-24 rounded-full bg-gray-700 px-4 py-2 font-bold text-white md:w-32 lg:w-40">
            More info
          </button>
        </div>
      </main>
    </div>
  );
}
