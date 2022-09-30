<script>
const asyncDataObject = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
})
console.log(asyncDataObject)
</script>

<template>
    
</template>