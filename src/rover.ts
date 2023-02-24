export enum Direction {
	north = "north",
	south = "south",
	east = "east",
	west = "west"
}

export enum Command {
	forward = "forward",
	backward = "backward",
	right = "right",
	left = "left"
}

export type Position = {
	x: 0 | 1 | 2 | 3 | 4;
	y: 0 | 1 | 2 | 3 | 4;
};

const OBSTACLE_COORDS = [
	[0, 0, 1, 0, 0],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1],
	[0, 1, 0, 1, 0]
];

export const isThereObstacle = (position: Position): boolean => {
	return OBSTACLE_COORDS[position.x][position.y] === 1;
};

export const getRoverFinalPosition = (position: Position, direction: Direction, commands: Command[]): Position => {
	let currentPosition = position;
	let currentDirection = direction;
	commands.forEach(command => {
		currentPosition = move(currentPosition, direction, command);
	});
	return currentPosition;
};

export const move = (currentPosition: Position, direction: Direction, command: Command): Position => {
	const { x, y } = currentPosition;
	const actualDirection = command === Command.backward ? getOppositeDirection(direction) : direction;
	switch (actualDirection) {
		case Direction.north:
			currentPosition = asPosition(x, y + 1);
			break;
		case Direction.south:
			currentPosition = asPosition(x, y - 1);
			break;
		case Direction.east:
			currentPosition = asPosition(x + 1, y);
			break;
		case Direction.west:
			currentPosition = asPosition(x - 1, y);
			break;
	}
	return currentPosition;
};

export const getOppositeDirection = (direction: Direction): Direction => {
	switch (direction) {
		case Direction.north:
			return Direction.south;
		case Direction.south:
			return Direction.north;
		case Direction.east:
			return Direction.west;
		case Direction.west:
			return Direction.east;
		default:
			return direction;
	}
};

const asPosition = (x: number, y: number): Position => {
	if (y > 4) return { x, y: 0 } as Position;
	if (y < 0) return { x, y: 4 } as Position;
	if (x > 4) return { x: 0, y } as Position;
	if (x < 0) return { x: 4, y } as Position;
	return { x, y } as Position;
};
