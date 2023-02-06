<template>
    <div>Let's upload here!</div>
    <input type="file" id="myfile" name="myfile"><br><br>
</template>

<script setup lang="ts">
let input = document.querySelector('input[type=file]')
const data = new FormData()
</script>