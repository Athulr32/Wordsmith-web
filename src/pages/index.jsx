
import Auth from "@/components/Auth/Auth.jsx"
import Entry from '@/components/Entry.jsx';
import Interest from "@/components/Interest.jsx"
import { useState } from "react";


export default function Home() {

  const [language, setLanguage] = useState("");
  const [gotLang, setGotLang] = useState(false);

  function languageHandler(lang) {

    setLanguage(lang)
    setGotLang(true)

  }

  return (

    <div style={{ height: "100%", overflow: "hidden" }}>
      {!gotLang && <Entry lang={languageHandler}></Entry>}
      {gotLang && <Auth lang={language} ></Auth>}


    </div>


  )
}

