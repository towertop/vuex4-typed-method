<template>
	<div>current: {{ a }}</div>
	<div>
		add
		<input type="text" name="step" v-model.number="step" />
		, reset when over
		<input type="text" name="b.value" :value="b" @input="updateB" />
	</div>
	<button @click="doIt" >do it!</button>
</template>
<script lang="typescript" src="./script.ts"></script>
