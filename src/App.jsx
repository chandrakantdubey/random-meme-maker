import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { InputBox } from "./components/InputBox";
import { MemeContainer } from "./components/MemeContainer";

function App() {
  const [allMemes, setAllMemes] = useState();
  const [meme, setMeme] = useState({
    topText: "Top",
    bottomText: "Bottom",
    imgUrl: "https://i.imgflip.com/261o3j.jpg",
  });

  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
      console.log(data.data);
    }
    getMeme();
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="app">
      <Header />
      <InputBox
        meme={meme}
        handleChange={handleChange}
        getMemeImage={getMemeImage}
      />
      <MemeContainer meme={meme} />
    </div>
  );
}

export default App;
