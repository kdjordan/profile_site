<script setup>
import { gsap } from 'gsap';


    onMounted(() => {
    const skills = document.querySelector('.skills')
    let row_width = skills.getBoundingClientRect().width;
	let row_item_width = skills.children[0].getBoundingClientRect().width;
	let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
	// let x_translation = initial_offset * -1;
	

	gsap.set(skills, {
		xPercent: `${initial_offset}`
	});

	let duration = 1;

    console.log(skills.getBoundingClientRect().width)
    
    var tl = gsap.timeline();
    tl.to(skills, {
        ease: "none",
        duration: duration,
        xPercent: 0,
        repeat: -1
    });
}) 


</script>
<template>
    <div>
        <section>
            <div class="w-full mx-auto">
                <div class="w-full text-container overflow-hidden">
                    <h2 class="hero-text">KEVIN</h2>
                    <h2 class="hero-text">JORDAN</h2>
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
    padding-top: 5vh;
    line-height:27vh;
    font-size: 25vw;
    animation: shift-left 6s ease;
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