import Card from "../components/card";

export default function Main({status}) {
    co
    const [chat, setChat] = useState(status);

    if (chat) { // if the status of chat is true --> meaning the Widget should be showing
        return (
        <>
            <Background>
                <Card>
                    <h1>find the <FancyFont>perfect</FancyFont> song for <FancyFont>every</FancyFont> moments</h1>

                    <h1>let's find <u>your</u> next tune</h1>
                </Card>

                <ChatNowWidget/>
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

                    <ChatNowToggle/>
                </Card>
            </Background>
        </>
    )
    }
}