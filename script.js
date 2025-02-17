document.addEventListener("DOMContentLoaded", function () {
    // Handle booking form submission
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;
            const timeSlot = document.getElementById("time-slot").value;
            const barber = document.getElementById("barber").value;

            // Map service, barber, and time slot to display-friendly text
            const serviceDisplayText = {
                "men-haircut": "Men's Haircut",
                "beard-trim": "Beard Trim",
                "haircut-beard": "Haircut and Beard Trim",
                "eyebrows-men": "Men's Eyebrows",
                "women-haircut": "Women's Haircut",
                "champi": "Champi"
            }[service] || service;

            const barberDisplayText = {
                "jake": "Jake",
                "edwin": "Edwin",
            }[barber] || barber;

            const timeSlotDisplayText = {
                "11am": "11:00 AM",
                "12pm": "12:00 PM",
                "1pm": "1:00 PM",
                "2pm": "2:00 PM",
                "3pm": "3:00 PM",
                "4pm": "4:00 PM",
                "5pm": "5:00 PM",
                "6pm": "6:00 PM",
            }[timeSlot] || timeSlot;

            // Save booking details to localStorage
            localStorage.setItem("service", serviceDisplayText);
            localStorage.setItem("date", date);
            localStorage.setItem("timeSlot", timeSlotDisplayText);
            localStorage.setItem("barber", barberDisplayText);

            // Redirect to client info page
            window.location.href = "client-info.html";
        });
    }

    // Enable time slot dropdown when a date is selected
    const dateInput = document.getElementById("date");
    const timeSlotDropdown = document.getElementById("time-slot");

    if (dateInput && timeSlotDropdown) {
        dateInput.addEventListener("change", function () {
            if (this.value) {
                timeSlotDropdown.disabled = false;
                timeSlotDropdown.innerHTML = `
                    <option value="11am">11:00 AM</option>
                    <option value="12pm">12:00 PM</option>
                    <option value="1pm">1:00 PM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                    <option value="5pm">5:00 PM</option>
                    <option value="6pm">6:00 PM</option>
                `;
            } else {
                timeSlotDropdown.disabled = true;
                timeSlotDropdown.innerHTML = `<option value="">Select a date first</option>`;
            }
        });
    }

    // Handle client info form submission
    const clientInfoForm = document.getElementById("client-info-form");
    if (clientInfoForm) {
        clientInfoForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const city = document.getElementById("city").value;
            const postalCode = document.getElementById("postal-code").value;
            const comments = document.getElementById("comments").value;

            // Save client info to localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("phone", phone);
            localStorage.setItem("email", email);
            localStorage.setItem("address", address);
            localStorage.setItem("city", city);
            localStorage.setItem("postalCode", postalCode);
            localStorage.setItem("comments", comments);

            // Redirect to confirmation page
            window.location.href = "confirmation.html";
        });
    }

    // Populate confirmation page with stored data
    if (window.location.pathname.includes("confirmation.html")) {
        const confirmedElements = {
            service: document.getElementById("confirmed-service"),
            date: document.getElementById("confirmed-date"),
            timeSlot: document.getElementById("confirmed-time"),
            barber: document.getElementById("confirmed-barber"),
            name: document.getElementById("confirmed-name"),
            phone: document.getElementById("confirmed-phone"),
            email: document.getElementById("confirmed-email"),
            address: document.getElementById("confirmed-address"),
            city: document.getElementById("confirmed-city"),
            postalCode: document.getElementById("confirmed-postalCode"),
            comments: document.getElementById("confirmed-comments"),
        };

        // Populate confirmation page with data from localStorage
        for (const key in confirmedElements) {
            if (confirmedElements[key] && localStorage.getItem(key)) {
                confirmedElements[key].textContent = String(localStorage.getItem(key));
            }
        }

        // Clear localStorage after displaying the confirmation
        localStorage.clear();
    }
});