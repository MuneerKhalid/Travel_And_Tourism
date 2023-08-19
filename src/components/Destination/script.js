document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    {
      name: "Destination 1",
      description: "This is the description for Destination 1.",
    },
    {
      name: "Destination 2",
      description: "This is the description for Destination 2.",
    },
    {
      name: "Destination 3",
      description: "This is the description for Destination 3.",
    },
    {
      name: "Destination 4",
      description: "This is the description for Destination 4.",
    },
    {
      name: "Destination 5",
      description: "This is the description for Destination 5.",
    },
    {
      name: "Destination 6",
      description: "This is the description for Destination 6.",
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
            <h2>${destination.name}</h2>
            <p>${destination.description}</p>
        `;
  }
});
