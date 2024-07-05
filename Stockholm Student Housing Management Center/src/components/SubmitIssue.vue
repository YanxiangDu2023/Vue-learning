<template>
  <div class="submit-issue-container">
    <h2>Send an e-mail to Customer service through our contact form</h2>
    <form @submit.prevent="submitIssue">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="issue.name" required>

      <label for="email">Email</label>
      <input type="email" id="email" v-model="issue.email" @blur="validateEmail" required>
      <div v-if="emailError" class="error-message">{{ emailError }}</div>

      <label for="address">Street address and apartment number</label>
      <input type="text" id="address" v-model="issue.address" required>
      <div v-if="addressError" class="error-message">{{ addressError }}</div>

      <label for="subject">Subject</label>
      <select id="subject" v-model="issue.subject" @blur="validateSubject" required>
        <option disabled value="">Please select one</option>
        <option>General Inquiry</option>
        <option>Maintenance Request</option>
        <option>Complaint</option>
      </select>
      <div v-if="subjectError" class="error-message">{{ subjectError }}</div>

      <label for="title">Message Title</label>
      <input type="text" id="title" v-model="issue.title" required>
      <div v-if="titleError" class="error-message">{{ titleError }}</div>

      <label for="description">Message</label>
      <textarea id="description" v-model="issue.description" required></textarea>
      <div v-if="descriptionError" class="error-message">{{ descriptionError }}</div>

      <label for="document">Attach document</label>
      <input type="file" id="document" ref="fileInput" @change="handleFileUpload">

      <button type="submit">Submit</button>
    </form>
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      issue: {
        name: '',
        email: '',
        address: '',
        subject: '',
        title: '',
        description: '',
        document: null
      },
      successMessage: '',
      emailError: '',
      subjectError: '',
      addressError: '',
      titleError: '',
      descriptionError: ''
    };
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.issue.email)) {
        this.emailError = 'Please enter a valid email address.';
      } else {
        this.emailError = '';
      }
    },
    validateSubject() {
      if (!this.issue.subject) {
        this.subjectError = 'Please select a subject.';
      } else {
        this.subjectError = '';
      }
    },
    validateAddress() {
      if (!this.issue.address) {
        this.addressError = 'Please enter your address.';
      } else {
        this.addressError = '';
      }
    },
    validateTitle() {
      if (!this.issue.title) {
        this.titleError = 'Please enter a message title.';
      } else {
        this.titleError = '';
      }
    },
    validateDescription() {
      if (!this.issue.description) {
        this.descriptionError = 'Please enter your message.';
      } else {
        this.descriptionError = '';
      }
    },
    handleFileUpload(event) {
      this.issue.document = event.target.files[0];
    },
    submitIssue() {
      this.validateEmail();
      this.validateSubject();
      this.validateAddress();
      this.validateTitle();
      this.validateDescription();

      if (this.emailError || this.subjectError || this.addressError || this.titleError || this.descriptionError) {
        alert('Please fix the errors before submitting.');
        return;
      }

      console.log('Form submitted with:', this.issue);
      this.successMessage = 'Successfully submitted!';
      this.resetForm();
    },
    resetForm() {
      this.issue = {
        name: '',
        email: '',
        address: '',
        subject: '',
        title: '',
        description: '',
        document: null
      };
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = null;
      }
    }
  }
};
</script>

<style>
.submit-issue-container {
  background-color: #edf2f6; /* Set background color for the entire page */
  padding: 1rem; /* Add some padding */
}

form {
  display: flex;
  flex-direction: column;
  background-color: #fff; /* Set form background color to white */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow effect */
}

label {
  margin-top: 1rem;
}

input, select, textarea {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #064a88; /* Set text color */
}

button {
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #064a88; /* Set button background color */
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #008ece; /* Set hover background color */
}

.error-message {
  color: red;
  font-size: 0.875rem;
}

.success-message {
  margin-top: 1rem;
  color: #064a88; /* Set success message color */
  font-weight: bold;
}
</style>
