import React, { useState } from 'react';
import './PictureSet.css';
import Picture from '../Picture/Picture';


const PictureSet = ({ imageSet,
    setFishSetFull, setImageSet, setFishSet }) => {

    const [clickedFishID, setClickedFishID] = useState([]);
    const [clickedFishSpecies, setClickedFishSpecies] = useState(null);
    const [solvedFish, setsolvedFish] = useState([]);
    const [startTime, setStartTime] = useState(null);
    const [gameDuration, setGameDuration] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [timerID, setTimerID] = useState(null);

    const addSolvedFish = (species) => {
        let currentSolvedFish = solvedFish;
        currentSolvedFish.push(species);
        setsolvedFish(currentSolvedFish);
    };
    const addClickedFishID = (id) => {
        let currentClickedFishID = clickedFishID;
        currentClickedFishID.push(id);
        setClickedFishID(currentClickedFishID);
    };
    const addClickedFishSpecies = (species) => {
        setClickedFishSpecies(species);
    };
    const clearClickedFishSpecies = () => {
        setClickedFishSpecies(null);
    };
    const clearClickedFishID = () => {
        setClickedFishID([]);
    };
    const replaceClickedFishID = (id) => {
        setClickedFishID([id])
    };

    const startNewGame = () => {
        let newImageSet = imageSet.sort(() => Math.random() - Math.random());
        setImageSet(newImageSet);
        setClickedFishID([]);
        setClickedFishSpecies([]);
        setsolvedFish([]);
        clearInterval(timerID);
        setClickCount( 0 );
        setGameDuration( null );
        setTimerID( null );
    };


    const handleNewFishClick = () => {
        setFishSetFull(false);
        setImageSet([]);
        setFishSet([]);
        clearClickedFishID();
        clearClickedFishSpecies();

    };

    const startTimer = () => {
        let gameStartedAt = new Date();
        //setStartTime( gameStartedAt ); 
        setTimerID(setInterval(() => {
            let GameDurationSec = Math.floor((new Date() - gameStartedAt) / 1000);
            let min = GameDurationSec < 60 ? 0 : Math.floor(GameDurationSec / 60);
            let sec = GameDurationSec % 60;
            if (sec < 10) { sec = '0' + sec };
            setGameDuration(`${min}:${sec}`);
        }, 1000));
    };


    /*const stopTimer = () => {  
    }
    */

    // pozice karet v radku
    let rows = [
        "positionA", "positionA", "positionA", "positionA",
        "positionB", "positionB", "positionB", "positionB",
        "positionC", "positionC", "positionC", "positionC",
        "positionD", "positionD", "positionD", "positionD"
    ]
    // pozice karet ve sloupci
    let columns = [
        "position1", "position2", "position3", "position4",
        "position1", "position2", "position3", "position4",
        "position1", "position2", "position3", "position4",
        "position1", "position2", "position3", "position4"
    ]
    // ulozeni pozic do objektu obrazku
    for (let i = 0; i < imageSet.length; i++) {
        imageSet[i].row = rows[i];
        imageSet[i].column = columns[i];
    };

    return (
        <div>
            <button className="pickNewFishButton" onClick={handleNewFishClick}><h2>Wana Pick New Fish?</h2></button>
            <button className="startGameButton" onClick={startNewGame}><h2>Start New Game</h2></button>
            {
                startTime &&
                <h4>{gameDuration}</h4>
            }

            <div className="pictureSet">

                {
                    imageSet.map((item) => {
                        return <div className={item.row + " " + item.column} key={item.id} >
                            <Picture fishSpecies={item} addClickedFishID={addClickedFishID} clickedFishID={clickedFishID}
                                clearClickedFishID={clearClickedFishID} solvedFish={solvedFish} addSolvedFish={addSolvedFish} clickedFishSpecies={clickedFishSpecies}
                                addClickedFishSpecies={addClickedFishSpecies} clearClickedFishSpecies={clearClickedFishSpecies}
                                replaceClickedFishID={replaceClickedFishID} startTimer={startTimer} setStartTime={setStartTime}
                                clickCount={clickCount} setClickCount={setClickCount} gameDuration={gameDuration}
                                setGameDuration={setGameDuration} timerID={timerID}  />
                        </div>
                    })
                }

            </div >
        </div>
    )

};

export default PictureSet;
