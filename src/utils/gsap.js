import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const splitTitle = (textRef, triggerRef) => {
  SplitType.create(textRef.current);
  const ctx = gsap.context((self) => {
    const chars = self.selector(".char");
    gsap.to(chars, {
      y: 0,
      stagger: 0.015,
      delay: 0.1,
      duration: 0.09,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: `top bottom`,
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
  }, textRef); // <- Scope!
  return () => ctx.revert(); // <- Cleanup!
};

export const splitText = (textRef, triggerRef) => {
  SplitType.create(textRef.current);
  const ctx = gsap.context((self) => {
    const chars = self.selector(".char");
    gsap.to(chars, {
      y: 0,
      stagger: 0.002,
      delay: 0.5,
      duration: 0.1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: `top bottom`,
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
  }, textRef); // <- Scope!
  return () => ctx.revert(); // <- Cleanup!
};
