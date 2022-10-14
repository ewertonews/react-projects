import TravelCard from "../TravelCard/TravelCard";
import data from "../../data";
import "./Travels.scss"
function Travels() {
    const travels = data.map((travel, index) => (<TravelCard {...travel} /> ))
    return (
        <section className="travels">
            {travels}
        </section>
    );
}

export default Travels;