import React from 'react';
import './PictureToSelect.css';


//useEffect

const PictureToSelect = ({ fishSpecies, fishSet, setFishSet, setFishSetFull, fishSetToImageSet,
    numberOfFishSelected, setNumberOfFishSelected }) => {

    const handleClick = (fishSpecies) => {
        let currentFishSet = fishSet;
        let currentNumberOfFishSelected = numberOfFishSelected;

        if (!currentFishSet.includes(fishSpecies)) {
            currentFishSet.push(fishSpecies);
            setFishSet(currentFishSet);
            currentNumberOfFishSelected++;
            setNumberOfFishSelected(currentNumberOfFishSelected);
        }

        if (currentFishSet.length === 8) {
            setFishSetFull(true);
            fishSetToImageSet(fishSet);
        }
    }

    return (


        <div className="imageContainer">

            {
                fishSet.includes(fishSpecies) ?

                    <button className="fishButtonSelected" onClick={() => handleClick(fishSpecies)} >
                        <img className="image" src={fishSpecies.image} alt="fish" />
                    </button> :

                    <button className="fishButton" onClick={() => handleClick(fishSpecies)} >
                        <img className="image" src={fishSpecies.image} alt="fish" />
                    </button>

            }

        </div>

    )

}

export default PictureToSelect;