import {useRef, useState} from "react";
import {Textarea} from "@/components/ui/textarea";

export default function InvoiceFrom() {
  const [isEdit, setIsEdit] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  return (
    <div>
      {!isEdit && (
        <div className="max-w-sm overflow-hidden relative h-16" onClick={() => {
          setIsEdit(true)
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }}>
          <svg fill="none" className="absolute inset-0 size-full stroke-gray-900/10">
            <defs>
              <pattern id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9" width="10" height="10" x="0" y="0"
                       patternUnits="userSpaceOnUse">
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
                  stroke="none"></rect>
          </svg>
        </div>
      )}
      {isEdit && <Textarea ref={inputRef} onBlur={() => setIsEdit(false)} />}
    </div>
  )
}