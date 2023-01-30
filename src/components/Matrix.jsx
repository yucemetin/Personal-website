import React, { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

function MatrixBackground({ timeout = 50 }) {
    const canvas = useRef();
    const { width, height } = useWindowSize();

    useEffect(() => {
        const context = canvas.current.getContext('2d');

        canvas.current.width = width;
        canvas.current.height = height;


        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array.from({ length: columns }).fill(0);

        context.fillStyle = 'rgba(0, 0, 0, 0.7)';
        context.fillRect(0, 0, width, height);

        const matrixEffect = () => {
            context.fillStyle = '#0001';
            context.fillRect(0, 0, width, height);

            context.fillStyle = 'rgba(255, 0, 0, 0.3)';
            context.font = '15pt monospace';

            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 20;
                context.fillText(text, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrixEffect, timeout);

        return () => {
            clearInterval(interval);
        };
    }, [height, width]);

    return (
        <div className='overflow-hidden fixed left-0 top-0 -z-10 w-full h-full'
        >
            <canvas
                ref={canvas}
            />
        </div>
    );
}

export default MatrixBackground;