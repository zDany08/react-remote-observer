import { useEffect } from "react";

/**
 * Creates an IntersectionObserver
 * 
 * @param elements IDs of the elements to observe
 */
export function useObserver(elements: string[], callback: IntersectionObserverCallback, options?: IntersectionObserverInit): void {
    useEffect(() => {
        if(elements.length == 0) console.warn("You are creating an IntersectionObserver with no elements, consider removing it.");
        const observer: IntersectionObserver = new IntersectionObserver(callback, options);
        for(const element of elements) {
            const elem: HTMLElement | null = document.getElementById(element);
            if(!elem) {
                console.warn(`There is no element with id '${element}' in this document.`);
                continue;
            }
            observer.observe(elem);
        }
        return () => observer.disconnect();
    }, []);
}
