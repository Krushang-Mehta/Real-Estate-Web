import "./filter.scss";

function Filter(){
    return(
        <div className="filter">

            <h1>Search results for <b>Rajkot</b> </h1>

            {/* Top Div section includes city as input */}
            <div className="top">
                <div className="item">
                    <label htmlFor="city">location</label>
                    <input type="text" id="city" name="city" placeholder="City Location" />
                </div>
            </div>


            {/* Bottom Div Part  */}
            <div className="bottom">

                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">All</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">All</option>
                        <option value="appartment">Appartment</option>
                        <option value="house">House</option>
                        <option value="office">Office</option>
                        <option value="shop">Shop</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min-Price</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max-Price</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" id="bedroom" name="bedroom" placeholder="any" />
                </div>


                {/* Button Components  */}
                <button>
                    <img src="/search.png" alt="Search-icon" />
                </button>

            </div>
        
        </div>

    )
}

export default Filter;