import { stagger } from "motion";
import { useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextReavelAniation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        new SplitType(scope.current, {
            types: 'lines,words',
            tagName: 'span'
        })

        // Set initial state - move words down
        const words = scope.current.querySelectorAll('.word');
        words.forEach((word: HTMLElement) => {
            word.style.transform = 'translateY(100%)'
        });
    }, [scope])

    const enterenceAnimation = () => {
        return animate(scope.current.querySelectorAll('.word'), {
            transform: 'translateY(0)'
        }, {
            duration: 0.5,
            delay: stagger(.15)
        })
    }

    const exitAnimation = () => {
        return animate(scope.current.querySelectorAll('.word'), {
            transform: 'translateY(100%)'
        }, {
            duration: 0.3,
            delay: stagger(-0.25, {
                startDelay: scope.current.querySelectorAll('.word').lenght * .025
            })
        })
    }

    return { scope, enterenceAnimation, exitAnimation }
}

export default useTextReavelAniation;