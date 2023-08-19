document.addEventListener("DOMContentLoaded", () => {
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
});

