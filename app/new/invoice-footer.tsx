import {useContext} from "react";
import {InvoiceContext} from "@/app/new/invoice-provider";

export default function InvoiceFooter() {
   const {state} = useContext(InvoiceContext);

   return (
       <div className="px-4 py-5 sm:px-6">
          Invoice Footer {state.totalPrice}
       </div>
   )
}