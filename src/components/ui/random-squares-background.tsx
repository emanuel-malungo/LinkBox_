interface Square {
    id: number;
    left: number;
    top: number;
    size: number;
    opacity: number;
    color: 'bg-purple-500' | 'bg-white';
    delay: number;
}

interface RandomSquaresBackgroundProps {
    squareCount?: number;
    minSize?: number;
    maxSize?: number;
    minOpacity?: number;
    maxOpacity?: number;
}

export function RandomSquaresBackground({
    squareCount = 15,
    minSize = 40,
    maxSize = 80,
    minOpacity = 0.1,
    maxOpacity = 0.4,
}: RandomSquaresBackgroundProps) {
    const generateRandomSquares = (): Square[] => {
        const squares: Square[] = [];
        for (let i = 0; i < squareCount; i++) {
            squares.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * (maxSize - minSize) + minSize,
                opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
                color: Math.random() > 0.5 ? 'bg-purple-500' : 'bg-white',
                delay: Math.random() * 0.5,
            });
        }
        return squares;
    };

    const randomSquares = generateRandomSquares();

    return (
        <>
            {/* Quadrados aleatórios no fundo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {randomSquares.map((square) => (
                    <div
                        key={`square-${square.id}`}
                        className={`absolute transition-all duration-300 hover:opacity-100 ${square.color}`}
                        style={{
                            left: `${square.left}%`,
                            top: `${square.top}%`,
                            width: `${square.size}px`,
                            height: `${square.size}px`,
                            opacity: square.opacity,
                            border: '1px solid rgba(168, 85, 247, 0.2)',
                            animationDelay: `${square.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Gradiente radial decorativo */}
            <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent pointer-events-none opacity-50" />
        </>
    );
}
