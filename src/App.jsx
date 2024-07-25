import { useState } from "react";
// import React from 'react';
import { CORE_COMPANIES } from "../data.js";
import Companies from "../Components/Companies";
import TabButton from "../Components/TabBox.jsx";
function App() {
    const [selComp, setSelComp] = useState('click here');

    function handleSelect(selectedComp) {
        console.log(selectedComp);
        setSelComp(selectedComp);
    }
    return (
        <div>
            <header>
                <h1>Nandishwar C</h1>
            </header>
            <main>
                <section id="core-concepts">
                <h2>Companies Worked</h2>
                    <ul>
                        <Companies {...CORE_COMPANIES[0]} />
                        <Companies {...CORE_COMPANIES[1]} />
                        <Companies {...CORE_COMPANIES[2]} />
                        <Companies {...CORE_COMPANIES[3]} />
                    </ul>
                    <section id="examples">
                        <ul>
                            <TabButton onSelect={() => handleSelect('LSEG')}>More Info</TabButton>
                            <TabButton onSelect={() => handleSelect('KPMG')}>More Info</TabButton>
                            <TabButton onSelect={() => handleSelect('JOYIT')}>More Info</TabButton>
                            <TabButton onSelect={() => handleSelect('INFY')}>More Info</TabButton>
                        </ul>
                    </section>
                </section>   
               
                <section id="tab-content">
                    { selComp}
                </section>
            </main>
        </div>
    );
}

export default App;
