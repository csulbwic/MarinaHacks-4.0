import bubbleImg from "./bub.png";


// Draws bubbles on the canvas
// Args:
//   canvasRef: RefObject<HTMLCanvasElement> - Reference to the canvas element
//   width: number - Width of the canvas
//   height: number - Height of the canvas
const drawBubbles = (canvas, width, height, isMobile) => {
    let globalCounter = 0; // Global counter for animation
    let ctx, BubbleImgObj; // Context and bubble image object
    let bubbles = []; // Array to store bubble objects

    // Adds a bubble to the canvas
    const addBubbleToCanvas = (x, y, size = 70) => {
        // Draws the bubble on the canvas
        ctx.drawImage(BubbleImgObj, x, y, size, size);
    };

    // Creates a bubble
    const createBubble = () => {
        const rnd = (low, high) => {
            return Math.random() * (high - low) + low;
        };

        // Randomizes the bubble's speed, size, and position. Mobile bubbles are smaller and move slower.
        const bubbleSpeed = isMobile ? rnd(1, 2) * -1 : rnd(2, 5) * -1;
        const size = isMobile ? rnd(3, 30) : rnd(5, 50);

        // Adds the bubble to the bubbles array
        bubbles.push({
            x: height,
            y: rnd(0, width * 2) - width,
            swaySpeed: isMobile ? rnd(50, 70) : rnd(80, 100),
            swayAmount: isMobile ? rnd(10, 20) : rnd(20, 30),
            bubbleSpeed,
            size
        });
    };

    // Updates the bubbles on the canvas
    const update = () => {
        ctx.clearRect(0, 0, width, height); // Clear the canvas
        ctx.save(); // Save the current state of the canvas
        globalCounter++;

        // Calculate the global sway based on the global counter
        const globalSway = Math.sin(globalCounter / 1000) * (width / 1.5);

        // Update each bubble in the bubbles array
        bubbles.forEach((b, k) => {
            // Calculate the x-sway modification for the bubble
            const xSwayModify = b.swayAmount * Math.sin(b.x / b.swaySpeed);

            // Draw the bubble on the canvas
            addBubbleToCanvas(
            b.y + xSwayModify + globalSway,
            b.x,
            (b.size + b.x) / 8,
            b.opacity
        );

        // Update the bubble's x-coordinate
        bubbles[k]["x"] = bubbles[k]["x"] + b.bubbleSpeed;

        // If the bubble is out of the left side of the canvas, delete it and create a new one
        if (b.x < -20) {
            delete bubbles[k];
            createBubble();
        }
        });

        requestAnimationFrame(update);
    };

    // Initializes the application
    const initApp = () => {
        ctx = canvas.getContext("2d"); // Get the 2D context of the canvas
        ctx.imageSmoothingEnabled = true;
        ctx.globalAlpha = 0.5;

        // Load the bubble image
        BubbleImgObj = new Image();
        BubbleImgObj.src = bubbleImg.src;
        
        BubbleImgObj.onload = () => {
            // Creates the bubbles on the canvas. Mobile bubbles are less in number.
            const bubbleCount = isMobile ? 10 : 25;
            for (let x = 0; x < bubbleCount; x++) {
                setTimeout(() => {
                    createBubble();
                }, x * 150);
            }

            // Start the update loop
            if (canvas) {
                update();
            }
        };

        BubbleImgObj.onerror = (e) => {
            console.error("Error loading bubble image:", e);
        };
    };

    initApp();
};

export default drawBubbles;
