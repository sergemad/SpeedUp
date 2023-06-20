<template>
  <div>
    <h1>Contact Us</h1>
    <p>Please fill out the form below to get in touch with us.</p>

    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
