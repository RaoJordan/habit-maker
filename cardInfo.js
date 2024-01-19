const state = {
    cards: [],
  };
  
  // Function to initialize the state with data from the backend
  const initData = (data) => {
    if (data && Array.isArray(data.allData)) {
      state.cards = data.allData;
      renderCards();
    } else {
      console.error("Invalid data format from the backend:", data);
    }
  };
  
  // Function to render the cards based on the current state
  const renderCards = () => {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear existing content
  
    state.cards.forEach((card) => {
      const cardElement = createCardElement(card);          
      container.appendChild(cardElement);
    });
  };
  
 // Function to create a card element
const createCardElement = (formData) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
  
    const cardTop = document.createElement("div");
    cardTop.classList.add("card-top");
  
    // Assuming you have an image property in your formData
    // const cardImage = document.createElement("img");
    // cardImage.src = "path/to/your/image.jpg"; // Replace with the actual path or URL of your image
    // cardImage.classList.add("image");
    // cardTop.appendChild(cardImage);
    const cardData = document.createElement("div");
    cardData.classList.add("card-data");
    cardData.textContent = `${formData.whatHappened || ''}`;
    cardTop.appendChild(cardData);
  
    const cardBottom = document.createElement("div");
    cardBottom.classList.add("card-bottom");
  
    // Customize the content based on your formData
    const topText = document.createElement("span");
    topText.classList.add("top-text");
    topText.textContent = "Premium Membership";
  
    const bottomText = document.createElement("span");
    bottomText.classList.add("bottom-text");
    bottomText.textContent = `What Happened: ${formData.whatHappened || ''}\nTips For Tomorrow: ${formData.tipsForTomorrow || ''}\nScreen Time: ${formData.screenTime || ''}\nInstagram Conquered: ${formData.instaConquered || ''}\nBGMI Conquered: ${formData.bgmiConquered || ''}`;
  
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Join Us";
  
    cardBottom.appendChild(topText);
    cardBottom.appendChild(document.createElement("br"));
    cardBottom.appendChild(bottomText);
    cardBottom.appendChild(document.createElement("br"));
    cardBottom.appendChild(button);
  
    cardWrapper.appendChild(cardTop);
    cardWrapper.appendChild(cardBottom);
  
    return cardWrapper;
  };
  
  // Rest of the code remains the same...
  
  
  // Simulate fetching data from the backend (replace this with your actual backend fetch)
  const fetchDataFromBackend = async () => {
    // Assuming you fetch JSON data from the backend
    try {
      const response = await fetch("http://localhost:4000");
      const data = await response.json();
      console.log("Data from the backend:", data);
      initData(data);
    } catch (error) {
      console.error("Error fetching data from the backend:", error);
    }
  };
  
  // Trigger fetching data from the backend and initializing the application
  fetchDataFromBackend();