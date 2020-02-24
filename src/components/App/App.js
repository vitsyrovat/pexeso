import React, { useState } from 'react';
import './App.css';
import PictureSet from '../PictureSet/PictureSet';
import Selection from '../Selection/Selection';

import amur from '../../Images/amur_upr.png';
import bolen from '../../Images/bolen_upr.png';
import candat from '../../Images/candat_upr.png';
import lin from '../../Images/lin_upr.png';
import lipan from '../../Images/lipan_upr.png';
import mnik from '../../Images/mnik_upr.png';
import okoun from '../../Images/okoun_upr.png';
import pstruhObecny from '../../Images/pstruhpotocni_upr.png';
import stika from '../../Images/stika_upr.png';
import sumec from '../../Images/sumec_upr.png';
import uhor from '../../Images/uhor_upr.png';
import cejnek from '../../Images/cejnekmaly_upr.png';
import cejnperletovy from '../../Images/cejnperletovy_upr.png';
import cejnsiny from '../../Images/cejnsiny_upr.png';
import cejnvelky from '../../Images/cejnvelky_upr.png';
import hlavatka from '../../Images/hlavatka_upr.png';
import horavka from '../../Images/horavka_upr.png';
import hrouzek from '../../Images/hrouzek_upr.png';
import proudnik from '../../Images/jelecproudnik_upr.png';
import tloust from '../../Images/jelectloust_upr.png';
import jeseter from '../../Images/jesetermaly_upr.png';
import jezdik from '../../Images/jezdikobecny_upr.png';
import kapr from '../../Images/kapr_upr.png';
import karas from '../../Images/karasobecny_upr.png';
import mihule from '../../Images/mihule_upr.png';
import mrenka from '../../Images/mrenka_upr.png';
import okounek from '../../Images/okounek_upr.png';
import ostroretka from '../../Images/ostroretka_upr.png';
import ouklej from '../../Images/ouklej_upr.png';
import ouklejka from '../../Images/ouklejka_upr.png';
import parma from '../../Images/parma_upr.png';
import perlin from '../../Images/perlin_upr.png';
import piskor from '../../Images/piskor_upr.png';
import plotice from '../../Images/plotice_upr.png';
import podoustev from '../../Images/podoustev_upr.png';
import duhak from '../../Images/pstruhduhovy_upr.png';
import sekavec from '../../Images/sekavec_upr.png';
import sih from '../../Images/sihseverni_upr.png';
import siven from '../../Images/sivenamericky_upr.png';
import slunecnice from '../../Images/slunecnice_upr.png';
import slunka from '../../Images/slunka_upr.png';
import strevle from '../../Images/strevle_upr.png';
import strevlicka from '../../Images/strevlicka_upr.png';
import sumecek from '../../Images/sumecek_upr.png';
import tolstolobik from '../../Images/tolstolobikbily_upr.png';
import vranka from '../../Images/vranka_upr.png';

let picturesAll = [
    { name: 'bolen', image: bolen, id: 0 },
    { name: 'candat', image: candat, id: 1 },
    { name: 'lin', image: lin, id: 2 },
    { name: 'mnik', image: mnik, id: 3 },
    { name: 'okoun', image: okoun, id: 4 },
    { name: 'stika', image: stika, id: 5 },
    { name: 'pstruhObecny', image: pstruhObecny, id: 6 },
    { name: 'lipan', image: lipan, id: 7 },
    { name: 'sumec', image: sumec, id: 8 },
    { name: 'uhor', image: uhor, id: 9 },
    { name: 'cejnek', image: cejnek, id: 10 },
    { name: 'cejnperletovy', image: cejnperletovy, id: 11 },
    { name: 'cejnsiny', image: cejnsiny, id: 12 },
    { name: 'cejnvelky', image: cejnvelky, id: 13 },
    { name: 'hlavatka', image: hlavatka, id: 14 },
    { name: 'horavka', image: horavka, id: 15 },
    { name: 'hrouzek', image: hrouzek, id: 16 },
    { name: 'proudnik', image: proudnik, id: 17 },
    { name: 'tloust', image: tloust, id: 18 },
    { name: 'jeseter', image: jeseter, id: 19 },
    { name: 'jezdik', image: jezdik, id: 20 },
    { name: 'kapr', image: kapr, id: 21 },
    { name: 'karas', image: karas, id: 22 },
    { name: 'mihule', image: mihule, id: 23 },
    { name: 'mrenka', image: mrenka, id: 24 },
    { name: 'okounek', image: okounek, id: 25 },
    { name: 'ostroretka', image: ostroretka, id: 26 },
    { name: 'ouklej', image: ouklej, id: 27 },
    { name: 'ouklejka', image: ouklejka, id: 28 },
    { name: 'parma', image: parma, id: 29 },
    { name: 'perlin', image: perlin, id: 30 },
    { name: 'piskor', image: piskor, id: 31 },
    { name: 'plotice', image: plotice, id: 32 },
    { name: 'podoustev', image: podoustev, id: 33 },
    { name: 'duhak', image: duhak, id: 34 },
    { name: 'sekavec', image: sekavec, id: 35 },
    { name: 'sih', image: sih, id: 36 },
    { name: 'siven', image: siven, id: 37 },
    { name: 'slunecnice', image: slunecnice, id: 38 },
    { name: 'slunka', image: slunka, id: 39 },
    { name: 'strevle', image: strevle, id: 40 },
    { name: 'strevlicka', image: strevlicka, id: 41 },
    { name: 'sumecek', image: sumecek, id: 42 },
    { name: 'tolstolobik', image: tolstolobik, id: 43 },
    { name: 'vranka', image: vranka, id: 44 },
    { name: 'amur', image: amur, id: 45 },
];

function App() {
    const [imageSet, setImageSet] = useState([]);
    const [fishSet, setFishSet] = useState([]);
    const [fishSetFull, setFishSetFull] = useState(false);

    const makeRandomPick = (picturesAll) => {
        let fishRandomlyOrdered = picturesAll.sort(() => Math.random() - Math.random());
        let randomFish = fishRandomlyOrdered.slice(0, 8);
        
        setFishSet(randomFish);
        
        return randomFish;
    };

    const fishSetToImageSet = (fishSet) => {
        let fishSetDouble = fishSet.concat(fishSet);
        let newFishSet = [];
        for (let i = 0; i < fishSetDouble.length; i++) {
            newFishSet.push({
                name: fishSetDouble[i].name,
                id: i,
                image: fishSetDouble[i].image
            });
        }

        newFishSet = newFishSet.sort(() => Math.random() - Math.random());
        setImageSet(newFishSet);
        setFishSet([]);
        //console.log(newFishSet.map(item => item.id));
    }


    return (
        <div className="App">
            <h1>Rybí pexeso</h1>

            {!fishSetFull &&
                <Selection picturesAll={picturesAll} fishSet={fishSet} setFishSet={setFishSet}
                    setFishSetFull={setFishSetFull} fishSetToImageSet={fishSetToImageSet}
                    makeRandomPick={makeRandomPick} />
            }


            {fishSetFull && imageSet.length === 16 &&
                <div>
                    <PictureSet imageSet={imageSet} setFishSetFull={setFishSetFull} setImageSet={setImageSet}
                        setFishSet={setFishSet} />

                </div>
            }



        </div>

    );
}

export default App;

/*


            <Bg clickedBg={clickedBg} setBgClicked={setBgClicked} />
            */