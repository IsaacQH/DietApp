
type DisplayRecordProp = {
    calories: number,
    text: string
}


export const DisplayRecord = ({calories, text}:DisplayRecordProp) => {
  return (
    <>     
        <p className="text-white font-bold rounded-full grid-cols-1 gap-3 text-center">
            <span className={`font-black text-6xl ${(text === "Consumed") ? "text-orange-500": ((text === "Burned") ? "text-lime-500": (calories>=0 ? "text-blue-500": "text-red-500"))}`}>{calories}</span>
            <p className="mt-2">{text}</p>
        </p>
    </>
  )
}
