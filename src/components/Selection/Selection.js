import React, { useState } from 'react';
import './Selection.css';
import PictureToSelect from '../PictureToSelect/PictureToSelect';

const Selection = ({ picturesAll, fishSet, setFishSet, setFishSetFull, fishSetToImageSet,
    makeRandomPick }) => {

    const [numberOfFishSelected, setNumberOfFishSelected] = useState(0);

    const handleRandomPick = () => {
        setFishSetFull(true);
        let randomPick = makeRandomPick(picturesAll);
        fishSetToImageSet(randomPick);

    };


    return (

        <div>
            <button className="randomPickButton" onClick={handleRandomPick}>Random pick?</button>

            <div id="main">
                <h2>Pick Your Fish!</h2>
            </div>
            <h3>{numberOfFishSelected}/8</h3>
            <div className="selection">
                {
                    picturesAll.map((item) => {
                        return <PictureToSelect fishSpecies={item} key={item.id}
                            fishSet={fishSet} setFishSet={setFishSet} setFishSetFull={setFishSetFull}
                            fishSetToImageSet={fishSetToImageSet} numberOfFishSelected={numberOfFishSelected}
                            setNumberOfFishSelected={setNumberOfFishSelected} />

                    })
                }


            </div >
        </div >
    )

};

export default Selection;
