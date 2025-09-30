import {useContext} from "react";
import {InvoiceContext} from "@/app/new/invoice-provider";

export default function InvoiceFooter() {
   const {state} = useContext(InvoiceContext);

   return (
       <div>
          Invoice Footer {state.totalPrice}
       </div>
   )
}