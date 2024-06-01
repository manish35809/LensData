function calculateDeliveryDate(regularTime, deliveryDays) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Check if current time is before regular time
    if (currentHour < regularTime) {
        // Include current day in delivery days
        currentTime.setDate(currentTime.getDate() + deliveryDays);
    } else {
        // Exclude current day in delivery days
        currentTime.setDate(currentTime.getDate() + deliveryDays + 1);
    }

    return currentTime.toDateString();
}

// Example usage
const regularTime = 14; // 2 PM in 24-hour format
const deliveryDays = 2;
const deliveryDate = calculateDeliveryDate(regularTime, deliveryDays);
console.log("Delivery Date:", deliveryDate);

