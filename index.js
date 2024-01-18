let insta = document.getElementById("insta");
function instaButton ()
{
    insta.style.color = "green"
    insta.innerHTML = "Insta Conquered Bitch"
}

let bgmi = document.getElementById("bgmi");
function bgmiButton ()
{
    bgmi.style.color = "green"
    bgmi.innerHTML = "I ain't a kid anymore"
}

async function submitForm() {
    // Get form data
    const wht = document.getElementById("wht").value;
    const tips = document.getElementById("tips").value;
    const screentime = document.getElementById("screentime").value;
  
    // Additional data from your buttons
    const instaConquered = insta.style.color === "green";
    const bgmiConquered = bgmi.style.color === "green";
  
    // Create a JavaScript object with the form data
    const formData = {
      whatHappened: wht,
      tipsForTomorrow: tips,
      screenTime: screentime,
      instaConquered: instaConquered,
      bgmiConquered: bgmiConquered,
    };
  
    // Send data to backend using fetch

    const frontendToBackend = async () => {
            const response = await fetch('http://localhost:4000/newData', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Data sent successfully:', data);

        return data;
        
    }

    const result = await frontendToBackend();

}