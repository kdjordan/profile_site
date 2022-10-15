<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
})

console.log('***', blogPostList)
</script>

<template>
    <div>
        <div v-for="blogPost in blogPostList" :key="blogPost._path">
            <NuxtLink :to="blogPost._path" >
                {{blogPost.title}}
            </NuxtLink>
            </div>

    </div>
    
    
</template>