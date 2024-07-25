import { useState } from "react";
import React from 'react';
import { CORE_COMPANIES } from "../data.js";
import { EXPERIENCE } from "../data.js";
import Companies from "../Components/Companies";
import TabButton from "../Components/TabBox.jsx";
function App() {
    const [selComp, setSelComp] = useState();

    function handleSelect(selectedComp) {
        console.log(selectedComp);
        setSelComp(selectedComp);
    }
    let tabContent = <p>Click on More info to load data</p> ;

    if(selComp){
        
        // tabContent =(
        //    <ul>
        //         <li>{EXPERIENCE[selComp][1]}</li>
        //         <li>{EXPERIENCE[selComp][2]}</li>
        //         <li>{EXPERIENCE[selComp][3]}</li>
        //         <li>{EXPERIENCE[selComp][4]}</li>
        //     </ul>
        // )

        tabContent =(
        <div>
        {    <ul>
              {Object.keys(EXPERIENCE[selComp]).map(key => (
                <li key={key}>{EXPERIENCE[selComp][key]}</li>
              ))}
            </ul>
          
        }
      </div>
        );
        
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
                        {CORE_COMPANIES.map((items) => (<Companies key={items.title}{...items}/>)) }
                        {/* <Companies {...CORE_COMPANIES[0]} />
                        <Companies {...CORE_COMPANIES[1]} />
                        <Companies {...CORE_COMPANIES[2]} />
                        <Companies {...CORE_COMPANIES[3]} /> */}
                    </ul>
                    <section id="examples">
                        <ul>
                            <TabButton isSelected={selComp === "LSEG"} onSelect={() => handleSelect('LSEG')}>More Info</TabButton>
                            <TabButton isSelected={selComp === "KPMG"} onSelect={() => handleSelect('KPMG')}>More Info</TabButton>
                            <TabButton isSelected={selComp === "JOYIT"} onSelect={() => handleSelect('JOYIT')}>More Info</TabButton>
                            <TabButton isSelected={selComp === "INFOSYS"} onSelect={() => handleSelect('INFOSYS')}>More Info</TabButton>
                        </ul>
                    </section>
                </section>   
               
                <section id="tab-content">
                <ul>
                    {tabContent}
                </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
