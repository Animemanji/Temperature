import LanguageSelection from "@/components/LanguageSelection";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("https://hiddenleaf.to/images/background-img-2.png")' }}>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
                    <h1 className="text-6xl font-bold mb-6">HiddenLeaf</h1>

                    <div className="relative w-3/4 lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Search anime..."
                            className="w-full py-3 pl-5 pr-14 rounded-full bg-white text-black focus:outline-none"
                        />
                        <button className="absolute right-2 top-2 bg-green-500 text-white p-2 rounded-full">
                            🔍
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-lg">
                            Top search: <span className="underline">Naruto: Shippuden</span>, <span className="underline">Solo Leveling</span>, <span className="underline">One Piece</span>, ...
                        </p>
                    </div>

                    <button className="mt-10 px-8 py-3 bg-green-500 rounded-full text-lg">
                        View Full Site
                    </button>

                    <p className="mt-6">
                        Share HiddenLeaf with your friends.
                    </p>
                </div>
            </div>

            <div className="min-h-screen bg-black text-white">
                <div className="container mx-auto px-4 py-8">
                    {/* Grid layout for desktop and stack layout for mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left side: Main content */}
                        <div className="space-y-6">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                                HiddenLeaf.to – The best site to watch anime in Hindi Telugu Tamil Malayalam Bengali online for Free
                            </h1>
                            <p className="text-lg">
                                Do you know that according to Google, the monthly search volume for anime-related topics is up to over 1 Billion times?
                                Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.
                                Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so
                                we've decided to build HiddenLeaf.to to be one of the best free anime streaming sites for all anime fans in the world.
                            </p>
                            <h2 className="text-2xl font-semibold mt-6">1/ What is HiddenLeaf.to?</h2>
                            <p>
                                HiddenLeaf.to is a free site to watch anime and you can even download Hindi Anime, Telugu Anime, Tamil Anime in ultra HD
                                quality without any registration or payment. By having only one ad in all kinds, we are trying to make it the safest site for free anime.
                            </p>
                            <h2 className="text-2xl font-semibold mt-6">2/ In How many Languages can I Watch Anime in HiddenLeaf?</h2>
                            <p>
                                HiddenLeaf provides anime content in many languages including Hindi, Telugu, Tamil, Malayalam, and Bengali.
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Hindi Anime:</strong> Many Hindi Animes like Jujutsu Kaisen, Naruto, Code Geass: Lelouch of the Rebellion, Vinland Saga, My Hero Academia, etc., for free on HiddenLeaf without any account and ad-free. Hindi Dub is done by the Crunchyroll official makers.</li>
                            </ul>
                        </div>

                        {/* Right side: Language selection */}
                        <div className="lg:block lg:col-span-1">
                            <LanguageSelection />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
