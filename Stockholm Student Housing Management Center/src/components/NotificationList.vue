<template>
  <div class="notifications-container">
    <img src="@/assets/Contactus.png" alt="Contact Us" class="contactus-image">
    <h2>NOTIFICATIONS</h2>
    <ul>
      <li v-for="notification in notifications" :key="notification.id">
        <h3 class="notification-title">{{ notification.title }}</h3>
        <p v-if="!notification.showFullMessage" class="notification-message">
          {{ notification.message.length > 100 ? notification.message.slice(0, 100) + '...' : notification.message }}
          <button @click="showFullMessage(notification)">more</button>
        </p>
        <p v-if="notification.showFullMessage" class="notification-message">{{ notification.message }}</p>
        <p class="notification-date">Date: {{ notification.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import notifications from '@/assets/notification.json';

export default {
  data() {
    return {
      notifications: []
    };
  },
  mounted() {
    this.notifications = notifications.map(notification => ({
      ...notification,
      showFullMessage: false
    }));
  },
  methods: {
    showFullMessage(notification) {
      notification.showFullMessage = true;
    }
  }
};
</script>

<style>
.contactus-image {
  width: 100%; /* Set image width to 100% of parent element */
  height: auto; /* Auto height */
  display: block; /* Make image block-level for margin and padding */
  margin-bottom: 1rem; /* Set margin bottom for spacing below the image */
}

.notifications-container {
  /* Retain original styles */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.notification-title {
  color: #064a88; /* Dark blue title */
  font-family: 'Arial', sans-serif; /* Title font */
}

.notification-message {
  color: black; /* Black message content */
  font-family: 'Verdana', sans-serif; /* Message content font */
}

.notification-date {
  font-family: 'Verdana', sans-serif; /* Date font consistent with message content */
}

button {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  margin-left: 1rem;
}
</style>
