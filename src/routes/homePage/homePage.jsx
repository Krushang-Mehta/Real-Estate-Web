import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

function HomePage() {

    return (
        <div className="homePage">

            <div className="textcontainer">

                <div className="wrapper">

                    <h1 className="title">
                         Get Your Dream Place 
                    </h1>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eius! Facere adipisci, dicta, eos obcaecati asperiores laborum tenetur nostrum placeat hic, assumenda possimus aliquid velit! Beatae voluptatibus tempora tenetur dicta.
                    </p>

                    <SearchBar/>

                    <div className="boxes">

                        <div className="box">
                        <h1>16+</h1>
                        <h2>years of experience</h2>
                    </div>

                     <div className="box">
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>

                     <div className="box">
                        <h1>1200+</h1>
                        <h2>Properties Ready</h2>
                    </div>

                    </div>

                    

                </div>

            </div>

            <div className="imgcontainer">
                <img src="bg.png" alt="Bg-image" />
            </div>

        </div>
    )
}

export default HomePage;