document.addEventListener("DOMContentLoaded", () => {
  const destination = [
    {
      img: "../../../assets/rome.jpeg",
      title: "Rome, Italy",
      price: "$5.42k",
      days: "10 days",
      index: "0"
      
    },
    {
      img: "../../../assets/london.jpg",
      title: "London, UK",
      price: "$4.2k",
      days: "12 days trip",
      index: "1"
    },
    {
      img: "../../../assets/switerzer.jpg",
      title: "Switzerland, Europe",
      price: "$15k",
      days: "28 days trip",
      index: "2"
    },
    {
      img: "../../../assets/thalin.webp",
      title: "aling Ngam, Thailand",
      price: "$3k",
      days: "3 days trip",
      index: "3"
    },
    {
      img: "../../../assets/ohio.webp",
      title: "Ohio, US",
      price: "$7.62k",
      days: "7 days trip",
      index: "4"
    },
    {
      img: "../../../assets/ubud.webp",
      title: "Ubud, Indonesia",
      price: "$6.21k",
      days: "8 days trip",
      index: "5"
    },
    {
      img: "../../../assets/london.jpg",
      title: "London, UK",
      price: "$4.2k",
      days: "12 days",
      index: "6"
    },
  ];

  const destinationElement = document.getElementById("destinations");
  let destinationHTML = '';

  destination.forEach((destinations) => {
    destinationHTML += `
    <div class="col-sm-6 col-md-6  col-lg-4">
        <div class="card destination-card">
          <img src=${destinations.img} alt="Image 1" class="card-img-top">
          <div class="card-body">
            <div class="card-head">
              <h5 class="card-title">${destinations.title}</h5>
              <h5 class="card-title">${destinations.price}</h5>
            </div>
            
            <div class="card-discription">
              <img src="../../../assets/paper-plane.png" height="15px" alt="explore">
              <p class="card-text">${destinations.days}</p>
              <button class="view-details-button" data-index=${destinations.index}>View Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  destinationElement.innerHTML = destinationHTML;

  const viewDetailsButtons = document.querySelectorAll(".view-details-button");

  viewDetailsButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
          navigateToDetailPage(index);
      });
  });

  function navigateToDetailPage(index) {
      const detailPageUrl = `../Destination/destination-details.html?destination=${index}`;
      window.open(detailPageUrl, "_blank");
  }
})