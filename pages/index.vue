<template>
    <h1 class="text-red-500 bg-green-500">Hllo</h1>
</template>

<script>
export default {
    data() {
        return {}
    },
    head() {
        return {
            title: 'About Us',
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: 'Home',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: process.env.npm_package_description,
                },

            ]
        }
    }
}
</script>