<script setup>
import { gsap } from 'gsap';

// const gsap = ref()
onMounted(() => {
    const text = document.querySelector('.the-text')
    gsap.set(text, {
		xPercent: '100'
	});
    var tl = gsap.timeline();
	tl.to(text, {
		ease: "none",
		duration: 1,
		xPercent: 0,
		repeat: -1
	});
}) 
    

</script>
<template>
    <div>
        <section>
            <div class="container mx-auto pb-52 overflow-hidden">
                <div class="w-full mb-10 font-bold leading-normal flex flex-row align-center justify-between the-text">
                    <div class="hero-text">KEVIN&nbsp;</div>
                    <div class="hero-text">JORDAN</div>
                </div>
            </div>
        </section>
        <!-- <BlogPostList /> -->
    </div>
</template>

<style>
.hero-text {
    font-size: clamp(30rem, 4vw, 4rem);
}
</style>