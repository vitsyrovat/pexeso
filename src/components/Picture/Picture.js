import React from 'react';
import './Picture.css';

//useEffect

const Picture = ({ fishSpecies, addClickedFishID, clickedFishID, clearClickedFishID,
    addClickedFishSpecies, clickedFishSpecies, solvedFish, addSolvedFish, clearClickedFishSpecies,
    replaceClickedFishID, setStartTime, startTimer, clickCount, setClickCount, gameDuration,
    timerID }) => {


    const handleClick = (fishSpecies) => {
        if (clickCount === 0) {

            setStartTime(new Date());
            startTimer();
        }
        setClickCount(clickCount + 1);

        // pokud neni zadna karticka kliknuta
        if (clickedFishID.length === 0) {
            addClickedFishID(fishSpecies.id);
            addClickedFishSpecies(fishSpecies.name);

        } else { //pokud je jiz jedna kliknuta a jeji ryba je stejna jako prave kliknuta
            if (clickedFishID.length === 1 && clickedFishID[0] !== fishSpecies.id && clickedFishSpecies === fishSpecies.name) {
                // pridej jeji ID, aby se zobrazila
                addClickedFishID(fishSpecies.id);

                // pokud je jiz 7 vyresenych paru (tento tedy je 8.), zastav timer:
                if (solvedFish.length === 7) {
                    clearInterval(timerID);
                };

                // s malym zpozdenim ji pridej k vyresenym, aby zmizely obe karty ryby
                setTimeout(() => {
                    addSolvedFish(fishSpecies.name);
                    // vycisti kliknute ID
                    clearClickedFishID();
                    // vycisti rybi druh
                    clearClickedFishSpecies();
                }, 500);

                // s vetsim zpozdenim check if je vyreseno 8 ryb, pak zobrazit hlasku
                setTimeout(() => {
                    if (solvedFish.length === 8) {
                        alert(`Výborně! Na vyřešení pexesa ti stačilo ${gameDuration} vteřin a ${(clickCount + 1) / 2} tahů!`);
                    };
                }, 600);


            } else { // pokud je jiz jedna kliknuta, ale druh neodpovida
                if (clickedFishID.length === 1 && clickedFishSpecies !== fishSpecies.name) {
                    // pridej jeji ID, aby se zobrazila
                    addClickedFishID(fishSpecies.id);
                    // pak vycisti kliknuty druh
                    clearClickedFishSpecies();
                } else { // pokud je kliknuta treti (tedy jsou ulozena jiz 2 ID)
                    if (clickedFishID.length === 2) {
                        // nahrad kliknuta ID timto druhem
                        replaceClickedFishID(fishSpecies.id);
                        addClickedFishSpecies(fishSpecies.name);
                    }
                }
            }
        }
    }

    if (solvedFish.includes(fishSpecies.name)) {
        return null;
    }

    if (clickedFishID.includes(fishSpecies.id)) {
        return (
            <div className="cardContainer">
                <button className="fishButton" onClick={() => handleClick(fishSpecies)} >
                    <img className="image" src={fishSpecies.image} alt="fish" />

                </button>
            </div>
        )

    } else {
        return (
            <div className="cardContainer">
                <button className="fishButton" onClick={() => handleClick(fishSpecies)} >

                </button>
            </div>
        )
    }
};

export default Picture;
