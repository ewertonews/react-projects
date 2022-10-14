import './TravelCard.css'

function TravelCard(travel) {
    console.log(travel);
    return(
        <main>
            <img src={travel.imageUrl} />
            <section>
                <div className='travelcard-location'>
                    <i className='fa fa-car'></i>&nbsp;
                    <span>{travel.location.toUpperCase()}</span>&nbsp;&nbsp;
                    <a href={travel.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{travel.title}</h1>
                <article>
                    <header>{travel.startDate} - {travel.endDate}</header>
                    <p>{travel.description}</p>
                </article>
            </section>
        </main>
    );
}

export default TravelCard;