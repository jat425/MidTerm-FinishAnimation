import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});

// hide moon elements
// gsap.set(".moon-things",{display:"none"});

export let moonZoomInTL = gsap.timeline();
moonZoomInTL.to(".moon-things",{duration:1, alpha:0})
        .fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:14, y:"+=1200", x:"+=300",ease:"none"})


export let moonZoomOutTL = gsap.timeline();
moonZoomOutTL.to("#moon",{duration:4, scale:2, ease: "power4.out",y: 100, x: 50}, "ZoomOut")
            .to("#space-ship",{duration:4, scale:.3, ease: "power4.out", y:"+=-600", x:"+=-550"}, "ZoomOut")
            .to(".moon-things",{duration:0.5, alpha:1}, "ZoomOut");
     
