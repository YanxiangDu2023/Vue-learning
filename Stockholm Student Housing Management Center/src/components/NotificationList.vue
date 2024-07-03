<template>
    <div class="notifications-container">
    
  

      <img src="@/assets/Contactus.png" alt="Contactus" class ="Contactus-image" >
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
  .Contactus-image {
  width: 100%; /* 设置图片宽度为父元素宽度的百分比 */
  height: auto; /* 高度自适应 */
  display: block; /* 让图片块级显示，可以应用 margin 和 padding */
  margin-bottom: 1rem; /* 设置图片与下方元素的间距 */
  }
  
  .notifications-container {
    /* 保留原来的样式 */
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
    color: #064a88; /* 深蓝色标题 */
    font-family: 'Arial', sans-serif; /* 标题字体 */
  }
  
  .notification-message {
    color: black; /* 黑色消息内容 */
    font-family: 'Verdana', sans-serif; /* 消息内容字体 */
  }
  
  .notification-date {
    font-family: 'Verdana', sans-serif; /* 日期字体与消息内容保持一致 */
  }
  button {
    background: none;
    border: none;
    color: blue;
    cursor: pointer;
    margin-left: 1rem;
  }
  </style>
  