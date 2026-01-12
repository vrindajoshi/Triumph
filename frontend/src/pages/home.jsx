import Card from "../components/parents/card";
import Background from "../components/parents/background";
import VoiceflowWidget from "../components/chatwidget";


export default function Main({status}) {
    const [chatWidget, setChatWidget] = useState(status);

    if (chat) { // if the status of chat is true --> meaning the Widget should be showing
        return (
        <>
            <Background>
                <Card>
                    <h1>find the <FancyFont>perfect</FancyFont> song for <FancyFont>every</FancyFont> moments</h1>

                    <h1>let's find <u>your</u> next tune</h1>
                </Card>

                <VoiceflowWidget/>
            </Background>
        </>
        )
    } else {
        return (
        <>
            <Background>
                <Card>
                    <h1>find the <FancyFont>perfect</FancyFont> song for <FancyFont>every</FancyFont> moments</h1>

                    <h1>let's find <u>your</u> next tune</h1>
                </Card>
            </Background>
        </>
    )
    }
}