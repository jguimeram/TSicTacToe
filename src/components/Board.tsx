import Square from "./Square"

function Board() {
    return (
        <div className="grid grid-cols-3 gap-2 w-72 h-72 mx-auto">
            {
                Array.from({ length: 9 }, (_, i: number) =>
                    <Square key={i} />
                )
            }
        </div>

    )
}

export default Board