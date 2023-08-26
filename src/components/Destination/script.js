document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    {
      headText: "Interesting Rome Structure view on firsthand",
      rating: "5.0 ·",
      review: "169 reviews ",
      location: "Rome, Italy",
      imgLeft: "../../../assets/rome.jpeg",
      imgRightTop: "../../../assets/rome2.jpeg",
      imgRightBottom: "../../../assets/rome3.jpeg",
      detailsSub1: "8 guests ·",
      detailsSub2: "Luxury Stay ·",
      detailsSub3: "4 bed ·",
      detailsSub4: "3 bath",
      price: "5.42k, Tax included",
      description: "Rome was called the “Eternal City” by the ancient Romans because they believed that no matter what happened in the rest of the world, the city of Rome would always remain standing. Exploring the city center by foot surrounded by glorious monuments and colossal remains takes you back in time to the “glory that was Rome”...",
      view: "Ancient view",
      wifi: "Wifi",
      parking: "Free parking on premises",
      TV: "C50 HDTV with Amazon Prime Video, Netflix, premium cable, standard cable",
      kitchen: "Kitchen",
      DW: "Dedicated workspace",
      pool: "Shared pool - available all year",
      elevator: "Elevator",
                
                
    },
    {
      headText: "London Calling Urban Adventures and Historic Wonders.",
      rating: "4.7 ·",
      review: "102 reviews ",
      location: "London, UK",
      imgLeft: "../../../assets/london.jpg",
      imgRightTop: "../../../assets/london2.jpg",
      imgRightBottom: "../../../assets/london3.jpg",
      detailsSub1: "6 person ·",
      detailsSub2: "Studio ·",
      detailsSub3: "3 bed ·",
      detailsSub4: "2 bath",
      price: "4.2k, Tax included",
      description: "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit...",
      view: "City skyline view",
      wifi: "Wifi",
      parking: "Free parking on premises",
      TV: "No TV",
      kitchen: "Kitchen",
      DW: "Dedicated workspace",
      pool: "Shared pool - available in summer months",
      elevator: "Elevator",
    },
    {
      headText: "Swiss Adventure: Alpine Peaks and Tranquil Lakes",
      rating: "5.0 ·",
      review: "221 reviews ",
      location: "Switzerland, Europe",
      imgLeft: "../../../assets/switerzer.jpg",
      imgRightTop: "../../../assets/switzerland2.jpg",
      imgRightBottom: "../../../assets/switzerland3.jpg",
      detailsSub1: "10 guests ·",
      detailsSub2: "Nature ·",
      detailsSub3: "2 bed ·",
      detailsSub4: "1 bath",
      price: "15k, Tax included",
      description: "Embark on an unforgettable journey to Switzerland, a land of breathtaking landscapes and enchanting charm. Explore the majestic Swiss Alps, where snow-capped peaks touch the sky, offering thrilling outdoor activities like skiing and hiking. Discover picturesque villages nestled by serene lakes, indulge in delectable Swiss chocolate and cheese, and immerse yourself in a blend of rich culture and natural beauty that defines this remarkable destination. Your Swiss adventure awaits, promising memories to last a lifetime...",
      view: "Greenery view",
      wifi: "Wifi",
      parking: "Free Horse Riding",
      TV: "Window access",
      kitchen: "Outdoor Kitchen",
      DW: "Open Roof Workspace",
      pool: "Shared pool - available all year",
      elevator: "Cable Car",
    },
    {
      headText: "Exploring Thailand's Beauty: A Journey to Remember",
      rating: "4.6 ·",
      review: "178 reviews ",
      location: "Thalin ngam, Thailand",
      imgLeft: "../../../assets/thalin.webp",
      imgRightTop: "../../../assets/thailand2.jpeg",
      imgRightBottom: "../../../assets/thailand3.jpeg",
      detailsSub1: "5 persons ·",
      detailsSub2: "Beach ·",
      detailsSub3: "2 bed ·",
      detailsSub4: "2 bath",
      price: "3k, Tax included",
      description: "Embark on a journey to Thalin Ngam, Thailand, where vibrant culture and natural beauty converge in perfect harmony. Immerse yourself in the bustling markets filled with aromatic street food and intricate crafts. Explore lush landscapes, from emerald rice paddies to serene temples, capturing the essence of Thailand's captivating charm. Get ready for an unforgettable adventure in Thalin Ngam...",
      view: "Beach view",
      wifi: "Wifi",
      parking: "Free parking on premises",
      TV: "Netflix",
      kitchen: "Kitchen",
      DW: "Dedicated workspace",
      pool: "Shared pool - available all year",
      elevator: "Horse rides",
    },
    {
      headText: "Exploring Ohio's Charm: Adventures Await in Heartland",
      rating: "4.9 ·",
      review: "188 reviews ",
      location: "Ohio, US",
      imgLeft: "../../../assets/ohio.webp",
      imgRightTop: "../../../assets/ohio2.jpg",
      imgRightBottom: "../../../assets/ohio3.jpg",
      detailsSub1: "7 Persons ·",
      detailsSub2: "Forest Bar ·",
      detailsSub3: "3 bed ·",
      detailsSub4: "1 bath",
      price: "7.62k, Tax included",
      description: "Embark on a journey to Ohio, where vibrant cities and charming small towns await. Explore the bustling streets of Columbus, experience the cultural richness of Cleveland's museums, and savor the scenic beauty of Hocking Hills. From the Rock and Roll Hall of Fame to the serene shores of Lake Erie, Ohio offers a diverse and unforgettable travel experience...",
      view: "Forest view",
      wifi: "Wifi",
      parking: "Free parking For VIP's",
      TV: "C50 HDTV with Amazon Prime Video, Netflix",
      kitchen: "Kitchen",
      DW: "Dedicated workspace",
      pool: "Shared pool - not available",
      elevator: "Hiking",
    },
    {
      headText: "Exploring Indonesia's Rich Culture and Natural Beauty",
      rating: "4.5 ·",
      review: "151 reviews ",
      location: "Ubud, Indonesia",
      imgLeft: "../../../assets/ubud.webp",
      imgRightTop: "../../../assets/ubud2.avif",
      imgRightBottom: "../../../assets/ubud3.jpg",
      detailsSub1: "9 persons ·",
      detailsSub2: "Studio ·",
      detailsSub3: "3 bed ·",
      detailsSub4: "2 bath",
      price: "6.21k Tax included",
      description: "Immerse yourself in the enchanting heart of Bali with a trip to Ubud, Indonesia. Surrounded by lush rice terraces and vibrant arts scenes, Ubud offers a serene escape. Explore ancient temples, indulge in Balinese cuisine, and rejuvenate your spirit in this cultural haven nestled amidst tropical beauty...",
      view: "Glasmorising Scenery",
      wifi: "Wifi",
      parking: "Free horses on premises",
      TV: " Premium cable",
      kitchen: "Outdoor Kitchen",
      DW: "Indoor workspace",
      pool: "Private pool - available all year",
      elevator: "Cable cart",
    },
  ];

  const destinationDetailElement =
    document.getElementById("destination-detail");

  // Get destination index from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const selectedDestinationIndex = parseInt(urlParams.get("destination")) || 0;

  const selectedDestination = destinations[selectedDestinationIndex];
  displayDestinationDetails(selectedDestination);

  function displayDestinationDetails(destination) {
    destinationDetailElement.innerHTML = `
    <div class="hero-text-container">
    <div class="hero-text">
      <p class="hero-caption-text">${destination.headText}</p>
    </div>
    <div class="hero-sub-text-container">
      <div class="hero-sub-text-left">
        <span style="font-weight: 700;">
          <img src="../../../assets/icons8-star-50.png" alt="star" height="15px">
          ${destination.rating}
        </span>
        <span style="text-decoration: underline; font-weight: 700;">
          ${destination.review} 
        </span>
        <span>
          · Superhost ·
        </span>
        <span style="text-decoration: underline; font-weight: 600;">
          ${destination.location}
        </span>
      </div>

      <div class="hero-sub-text-right">
        <span>
          <img src="../../../assets/heart.png" alt="heart" height="20px">
        </span>
      </div>
    </div>
  </div>

  <div class="hero-img-container">
    <div class="hero-img-left">
      <img src=${destination.imgLeft} alt="left" height="500px" width="650px">
    </div>
    <div class="hero-img-right">
      <div class="right-img-top">
        <img src=${destination.imgRightTop} alt="right-top" height="180px" width="450px">
      </div>
      <div class="right-img-bottom">
        <img src=${destination.imgRightBottom} alt="right-bottom" height="180px" width="450px">
      </div>
    </div>
  </div>

  <div class="hero-details-container">
    <div class="hero-details-head-container">
      <div class="details-head-container">
        <div class="details-head">
          <p class="details-head-text">Entire trip hosted by Aventura Dreamscapes</p>
        </div>
        
      </div>
      
      <div class="details-sub-text">
        <span><p>${destination.detailsSub1}</p></span>
        <span><p>${destination.detailsSub2}</p></span>
        <span><p>${destination.detailsSub3}</p></span>
        <span><p>${destination.detailsSub4}</p></span>
      </div>
    </div>

    <div class="details-info-container">
      <div class="info1">
        <span><img src="../../../assets/icons8-price-64.png" alt="logo" height="35px"></span>
        <span><p class="info-head-text">Cost of trip</p>
        <p class="info-sub-text">${destination.price}</p></span>
      </div>
      <div class="info1">
        <span><img src="../../../assets/icons8-check-in-64.png" alt="logo" height="38px"></span>
        <span><p class="info-head-text">Self check-in</p>
        <p class="info-sub-text">You can check in with the building staff.
        </p></span>
      </div>
      <div class="info1">
        <span><img src="../../../assets/icons8-refund-64.png" alt="logo" height="33px"></span>
        <span><p class="info-head-text">Free cancellation for 48 hours.</p>
        <p class="info-sub-text"></p></span>
      </div>
    </div>

    <div class="details-description-container">
      <div class="description-text">
        <p>
          ${destination.description}
        </p>
      </div>
      <div class="description-more">
        <p>Show more</p>
      </div>
    </div>

    <div class="details-amenities-container">
      <div class="amenities-head-text-container">
        <p class="amenities-head-text">
          What this place offers
        </p>
      </div>
      <div class="amenities-info-container">
        <div class="amenities-left">
          <div class="amenities-info">
            <span>
            •
            </span>
            <span >${destination.view}</span>
          </div>
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.wifi}</span>
          </div>
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.parking}</span>
          </div>
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.TV}</span>
          </div>
          
        </div>
        <div class="amenities-right">
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.kitchen}</span>
          </div>
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.DW}</span>
          </div>
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.pool}</span>
          </div>
          <div class="amenities-info">
            <span>
            •
            </span>
            <span>${destination.elevator}</span>
          </div>
        </div>
      </div>
      <div class="reserve-container">
        <p class="reserve-head-text">Reserve Now</p>
        <p class="reserve-sub-text">10% discount available</p>
        <p class="reserve-price-text">
          $${destination.price}
        </p>
        <button class="reserve-btn">
          <p class="reserve-btn-text">
            Reserve
          </p>
        </button>
      </div>
    </div>
  </div>
        `;
  }
});
