
// Mock Data (if Local Storage is empty)
const initialData = [
   { building: "A", room: "101", occupantName: "John Doe", occupantType: 
"Athlete" },
   { building: "B", room: "202", occupantName: "Jane Smith", occupantType: 
"Official" }
];
// Utility to Get/Set Local Storage
const loadAccommodationData = () => 
JSON.parse(localStorage.getItem('accommodationData')) || initialData;
const saveAccommodationData = (data) => 
localStorage.setItem('accommodationData', JSON.stringify(data));
// Initialize Table
const renderTable = () => {
   const data = loadAccommodationData();
   const tableBody = document.querySelector("#room-status tbody");
   tableBody.innerHTML = ""; // Clear table
   data.forEach((entry, index) => {
       const row = document.createElement("tr");
       row.innerHTML = `
           <td>${entry.building}</td>
           <td>${entry.room}</td>
           <td>${entry.occupantName}</td>
           <td>${entry.occupantType}</td>
           <td><button class="remove-btn" 
data-index="${index}">Remove</button></td>
       `;
       tableBody.appendChild(row);
   });
};
// Add Notification
const addNotification = (message) => {
   const notificationList = document.getElementById("notification-list");
   const notification = document.createElement("li");
   notification.textContent = message;
   notificationList.appendChild(notification);
   setTimeout(() => notification.remove(), 5000); // Auto-remove after 5 
seconds
};
// Form Submission
document.getElementById("accommodation-form").addEventListener("submit", (e) => 
{
   e.preventDefault();
   const building = document.getElementById("building").value;
   const room = document.getElementById("room").value;
   const occupantName = document.getElementById("occupant-name").value;
   const occupantType = document.getElementById("occupant-type").value;
   const data = loadAccommodationData();
   // Check if the room is already allocated
   const roomExists = data.some(
       (entry) => entry.building === building && entry.room === room
   );
   if (roomExists) {
       alert(`Room ${room} in Building ${building} is already allocated.`);
       return;
   }
   // Add new allocation
   data.push({ building, room, occupantName, occupantType });
   saveAccommodationData(data);
   renderTable();
   addNotification(`Allocated Room ${room} in Building ${building} to $
{occupantName}.`);
   e.target.reset();
});
// Remove Allocation
document.querySelector("#room-status").addEventListener("click", (e) => {
   if (e.target.classList.contains("remove-btn")) {
       const index = e.target.getAttribute("data-index");
       const data = loadAccommodationData();
       const removed = data.splice(index, 1)[0];
       saveAccommodationData(data);
       renderTable();
       addNotification(`Removed Room ${removed.room} in Building $
{removed.building}.`);
   }
});
// Initial Load
document.addEventListener("DOMContentLoaded", () => {
   renderTable();
});