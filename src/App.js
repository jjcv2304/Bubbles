import Bubble from "./app/Bubble";

function App() {

    return (
        <div className="App">
            <Bubble name="Total" calories="100">2100</Bubble>
            <Bubble name="Breakfast" calories="550" macro_p="30" macro_h="50" macro_f="20"/>
            <Bubble name="Lunch" calories="650" macro_p="30" macro_h="50" macro_f="20"/>
            <Bubble name="Dinner" calories="490" macro_p="30" macro_h="50" macro_f="20"/>
            <Bubble name="Snacks" calories="290" macro_p="30" macro_h="50" macro_f="20"/>
        </div>
    );
}

export default App;
