export function PhotoDetails() {
  return (
     <div className="flex items-center justify-center w-full h-screen p-2">
        <ul className="rounded-sm bg-slate-200 px-2 py-4 w-full flex  flex-col gap-2">
          <li className="flex justify-between"><span className="font-bold">author:</span> Alejandro Escamilla</li>
          <li className="flex justify-between"><span className="font-bold">width:</span> 5000</li>
          <li className="flex justify-between"><span className="font-bold">height:</span> 3333</li>
        </ul>
      </div> 
  )
}