import { Container, Image } from "react-bootstrap";
import { backpack, bicycle, binbags, boots, brush, caravan, compass, ducttape, firstaid, kayak, lantern, lighter, mallet, map, matches, picnicbasket, picnictable, pillows, rope, safety, sleepingbag, swiss, tent, tentrepair, torch, water } from "../../assets/images/camping/";
import { Fox, Bunny, RedSquirrel, Deer, Hedgehog, Badger, Beaver, Racoon, Owl } from "../../assets/images/animals/";

import "./activities.css";

export default function Activities() {
    
    return(
        <>
            <Container className="activities-container">
                <h1 className="activities-header">Can You Find?:</h1>
                <div className="activities-list">
                    <Image className="findme-icons" src={backpack} alt="backpack">Backpack</Image>
                    <Image className="findme-icons" src={bicycle} alt="bicycle">Bicycle</Image>
                    <Image className="findme-icons" src={binbags} alt="binbags">Bin Bags</Image>
                    <Image className="findme-icons" src={brush} alt="brush">Brush / Broom</Image>
                    <Image className="findme-icons" src={caravan} alt="caravan">Caravan</Image>
                    <Image className="findme-icons" src={compass} alt="compass">Compass</Image>
                    <Image className="findme-icons" src={ducttape} alt="duct tape">Duct Tape</Image>
                    <Image className="findme-icons" src={firstaid} alt="first aid kit">First Aid Kit</Image>
                    <Image className="findme-icons" src={kayak} alt="kayak or canoe">Kayak or Canoe</Image>
                    <Image className="findme-icons" src={lantern} alt="lantern">Lantern</Image>
                    <Image className="findme-icons" src={lighter} alt="lighter">Lighter</Image>
                    <Image className="findme-icons" src={mallet} alt="mallet">Mallet</Image>
                    <Image className="findme-icons" src={map} alt="map">Map</Image>
                    <Image className="findme-icons" src={matches} alt="matches">Matches</Image>
                    <Image className="findme-icons" src={picnicbasket} alt="picnic basket">Picnic Basket</Image>
                    <Image className="findme-icons" src={picnictable} alt="picnic table">Picnic Table</Image>
                    <Image className="findme-icons" src={pillows} alt="pillows">Pillows</Image>
                    <Image className="findme-icons" src={safety} alt="Safety gear">Safety Gear</Image>
                    <Image className="findme-icons" src={sleepingbag} alt="sleeping bag">Sleeping Bag</Image>
                    <Image className="findme-icons" src={rope} alt="rope">Rope</Image>
                    <Image className="findme-icons" src={swiss} alt="swiss army knife">Multi Tool</Image>
                    <Image className="findme-icons" src={tentrepair} alt="tent repair kit">Tent Repair Kit</Image>
                    <Image className="findme-icons" src={tent} alt="tent">Tent</Image>
                    <Image className="findme-icons" src={torch} alt="torch">Torch</Image>
                    <Image className="findme-icons" src={boots} alt="walking boots">Boots</Image>
                    <Image className="findme-icons" src={water} alt="water">Water</Image>
                    <Image className="findme-icons" src={Fox} alt="fox">Fox</Image>
                    <Image className="findme-icons" src={Bunny} alt="bunny">Rabbit</Image>
                    <Image className="findme-icons" src={RedSquirrel} alt="red squirrel">Red Squirrel</Image>
                    <Image className="findme-icons" src={Deer} alt="deer">Deer</Image>
                    <Image className="findme-icons" src={Hedgehog} alt="hedgehog">Hedgehog</Image>
                    <Image className="findme-icons" src={Badger} alt="badger">Badger</Image>
                    <Image className="findme-icons" src={Beaver} alt="beaver">Beaver</Image>
                    <Image className="findme-icons" src={Racoon} alt="racoon">Racoon</Image>
                    <Image className="findme-icons" src={Owl} alt="owl">Owl</Image>
                </div>

                <h3>What else can you find?</h3>
               
            </Container>
        </>
    )
}