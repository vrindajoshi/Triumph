import Card from "../components/parents/card";
import Background from "../components/parents/background";
import { useState } from "react";
import FancyFont from "../components/parents/fancyfont";


export default function Main({ setIsChatOpen }) {
   return (
        <>
            <Background>
                <Card>
                    <div className="text-5xl mb-6 text-left leading-tight">
                        <div>
                            find the <FancyFont>perfect</FancyFont> song
                        </div>
                        <div>
                            for <FancyFont>every</FancyFont> moment
                        </div>
                        <div className="mt-8">
                            let's find <FancyFont>your</FancyFont> next tune
                        </div>

                        <button 
                        onClick={() => setIsChatOpen(true)}
                        className="px-6 py-2 bg-black text-white text-sm font-medium rounded-xl tracking-wide uppercase"
                    >
                        GET STARTED
                    </button>
                    </div>
                </Card>
            </Background>
        </>
    )
}