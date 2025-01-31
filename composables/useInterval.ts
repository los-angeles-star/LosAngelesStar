export default function (cb: () => void, ms: number) {
    let int: undefined | ReturnType<typeof setTimeout> = undefined;

    // Set the interval when the component is mounted.
    onMounted(() => {
        int = setInterval(cb, ms)
    });

    // Clear the interval when the component is unmounted.
    onUnmounted(() => {
        // Check if 'int' is defined before attempting to clear it.
        if (int !== undefined) {
            clearInterval(int);
        }
    });
 }