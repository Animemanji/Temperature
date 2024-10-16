const languages = [
    { name: "Hindi", img: "https://hiddenleaf.to/images/profileImages/Luffy.webp" },
    { name: "Telugu", img: "https://hiddenleaf.to/images/profileImages/goku.webp" },
    { name: "Tamil", img: "https://hiddenleaf.to/images/profileImages/naruto.webp" },
    { name: "Malayalam", img: "https://hiddenleaf.to/images/profileImages/sasuke.webp" },
    { name: "Bengali", img: "https://hiddenleaf.to/images/profileImages/zoro.webp" },
    { name: "English", img: "https://hiddenleaf.to/images/profileImages/gojo.webp" },
    { name: "Japanese", img: "https://hiddenleaf.to/images/profileImages/sanji.webp" },
  ];
  
  const LanguageSelection = () => {
    return (
      <div className="lg:max-w-xs mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold mb-4">Watch Anime in Your Language</h2>
        <p className="mb-6">Select the language you want in below options</p>
        <div className="space-y-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300"
            >
              <span className="text-lg font-semibold">{lang.name}</span>
              <img
                src={lang.img}
                alt={`${lang.name} icon`}
                className="w-10 h-10 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LanguageSelection;
  