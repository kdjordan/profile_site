<script setup>
import { gsap } from 'gsap';


onMounted(() => {
    const skills = document.querySelector('.skills')
    const kevin = document.getElementById('kevin')
    const jordan = document.getElementById('jordan')
	
    var tl = gsap.timeline();

    tl.from(kevin, {xPercent: -100, duration: 3})
    .from(jordan, {xPercent: -100, duration: 3}, '<1')
    .from(skills, {ease: "back(2)",duration: 3, xPercent: -100,})
    ;
}) 


</script>
<template>
    <div>
        <section>
            <div class="w-full mx-auto">
                <div class="w-full text-container overflow-hidden font-oswald">
                    <h2 class="hero-text" id="kevin">KEVIN</h2>
                    <h2 class="hero-text" id="jordan">JORDAN</h2>
                </div>
            </div>
        </section>
        <section>
            <div class="w-full flex justify-around pt-2 lg:text-5xl md:text-2xl sm:text-xl skills overflow-hidden">
                <div class="text-skills">VUE</div>
                <div class="text-skills">NUXT</div>
                <div class="text-skills">NODE</div>
                <div class="text-skills">REACT</div>
                <div class="text-skills">CREATIVE</div>
            </div>
        </section>
        <!-- <BlogPostList /> -->
    </div>
</template>

<style>
.hero-text {
    display: inline-block;
    padding-top: 3vh;
    line-height:21vh;
    font-size: 25vw;
    /* animation: shift-left 6s ease; */
}


@keyframes shift-left {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
}
</style>