export function CreateInvoice() {
  return (
    <div className="mx-auto max-w-5xl min-h-screen flex justify-center items-center py-10 font-mono">
      <div className="border border-gray-300 shadow-lg h-full w-full p-10">

        <div>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-mono">
              Invoice no: INV-0001
            </div>

            <div>
              Issue date: 2024-01-01
            </div>

            <div>
              Due date: 2024-01-31
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div>
              From
            </div>

            <div>
              To
            </div>
          </div>
        </div>

        <div>
          Body
        </div>

        <div>
          Footer
        </div>


      </div>
    </div>
  )
}