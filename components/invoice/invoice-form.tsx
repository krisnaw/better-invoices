"use client"
import {InvoiceDueDate} from "@/components/invoice/invoice-due-date";
import {InvoiceIssueDate} from "@/components/invoice/invoice-issue-date";
import {InvoiceNumber} from "@/components/invoice/invoice-number";
import {InvoiceCustomer} from "@/components/invoice/invoice-customer";
import {inter} from "@/lib/fonts";
import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#111827",
  },
  heading: {
    fontSize: 18,
    marginBottom: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  column: {
    flex: 1,
  },
  tableHeader: {
    borderBottom: "1px solid #D1D5DB",
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  totalRow: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "bold",
  },
  cellDescription: {
    flexBasis: "50%",
    flexGrow: 1,
  },
  cellQuantity: {
    width: "15%",
    textAlign: "right",
    flexShrink: 0,
  },
  cellPrice: {
    width: "20%",
    textAlign: "right",
    flexShrink: 0,
  },
  cellTotal: {
    width: "20%",
    textAlign: "right",
    flexShrink: 0,
  },
});

const invoiceItems = [
  {description: "Design", quantity: 1, price: 500000},
  {description: "Development", quantity: 1, price: 500000},
  {description: "Planning & meeting", quantity: 1, price: 500000},
];

const InvoiceDocument = () => {
  const total = invoiceItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.heading}>
          <Text>Invoice</Text>
        </View>

        <View style={pdfStyles.section}>
          <View style={pdfStyles.row}>
            <Text>Invoice #: INV-0001</Text>
            <Text>Issue date: 2024-01-01</Text>
          </View>
          <View style={pdfStyles.row}>
            <Text>Due date: 2024-01-15</Text>
          </View>
        </View>

        <View style={[pdfStyles.section, pdfStyles.twoColumn]}>
          <View style={pdfStyles.column}>
            <Text>From</Text>
            <Text>Lost Island AB</Text>
            <Text>miguel@lostisland.com</Text>
            <Text>123 Main St, Anytown, CA 12345, USA</Text>
          </View>
          <View style={pdfStyles.column}>
            <Text>To</Text>
            <Text>Client Name</Text>
            <Text>client@email.com</Text>
          </View>
        </View>

        <View style={pdfStyles.section}>
          <View style={pdfStyles.tableHeader}>
            <View style={pdfStyles.tableRow}>
              <Text style={pdfStyles.cellDescription}>Description</Text>
              <Text style={pdfStyles.cellQuantity}>Qty</Text>
              <Text style={pdfStyles.cellPrice}>Price</Text>
              <Text style={pdfStyles.cellTotal}>Total</Text>
            </View>
          </View>

          {invoiceItems.map((item) => (
            <View key={item.description} style={pdfStyles.tableRow}>
              <Text style={pdfStyles.cellDescription}>{item.description}</Text>
              <Text style={pdfStyles.cellQuantity}>{item.quantity}</Text>
              <Text style={pdfStyles.cellPrice} wrap={false}>
                Rp{item.price.toLocaleString("id-ID")}
              </Text>
              <Text style={pdfStyles.cellTotal} wrap={false}>
                Rp{(item.price * item.quantity).toLocaleString("id-ID")}
              </Text>
            </View>
          ))}

          <View style={[pdfStyles.tableRow, pdfStyles.totalRow]}>
            <Text style={pdfStyles.cellDescription}>Total</Text>
            <Text style={pdfStyles.cellQuantity}></Text>
            <Text style={pdfStyles.cellPrice}></Text>
            <Text style={pdfStyles.cellTotal} wrap={false}>
              Rp{total.toLocaleString("id-ID")}
            </Text>
          </View>
        </View>

        <View>
          <Text>Payment details: Bank BCA, Account 1234567890</Text>
          <Text>Note: Thank you for your business!</Text>
        </View>
      </Page>
    </Document>
  );
};

export function InvoiceForm() {
  return (
    <div className={inter.className}>
      <div className="mx-auto w-[210mm] ">
        <div className="border border-gray-300 shadow-lg h-full w-full p-6">
          <div className="flex justify-end">
            <PDFDownloadLink
              document={<InvoiceDocument />}
              fileName="invoice.pdf"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              {({loading}) => (loading ? "Preparing PDF..." : "Download PDF")}
            </PDFDownloadLink>
          </div>

          <div>
            <div className="grid grid-cols-2 item-start gap-4">

              <div className="max-w-sm">
                <div className="border border-gray-300 p-4">
                  Logo
                </div>
              </div>

              <div className="text-right text-sm ">
                <div className="inline-flex items-center gap-4">
                  <InvoiceNumber />
                </div>

                <div className="inline-flex items-center gap-4">
                  <InvoiceIssueDate />
                </div>

                <div className="inline-flex items-center gap-4">
                  <InvoiceDueDate />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-sm">
                <div className="font-medium">
                  From
                </div>
                <div className="mt-2.5">

                  <span>Lost Island AB</span>
                  <ul className="text-sm">
                    <li>
                      Email: miguel@lostisland.com
                    </li>

                    <li>
                      Phone: 123-456-7890
                    </li>

                    <li>
                      Address: 123 Main St, Anytown, CA 12345, USA
                    </li>
                    <li>
                      VAT: 1234567890
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-sm">
                <div className="font-medium">
                  To
                </div>
                <div className="mt-2.5">
                  <InvoiceCustomer />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <table className="relative min-w-full divide-y divide-gray-300">
              <thead>
              <tr>
                <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-1/3">
                  Description
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                  Quantity
                </th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                  Price
                </th>
                <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0 text-right">
                  Total
                </th>
              </tr>
              </thead>
              <tbody>

              <tr>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                  Design
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">1</td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-500">Rp500.000</td>
                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                  Rp500.000
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                  Development
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">1</td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-500">Rp500.000</td>
                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                  Rp500.000
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0 w-1/3">
                  Planning & meeting
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 text-right">1</td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-500">Rp500.000</td>
                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                  Rp500.000
                </td>
              </tr>


              </tbody>
            </table>


            <div className="flex justify-end mt-10 ">
              <div>
                <table className="relative min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm text-gray-500 sm:pl-0">
                      VAT
                    </th>
                    <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0 text-sm text-right">
                      <span className="whitespace-nowrap">Rp1.500.000</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      Total
                    </td>

                    <td className="py-4 pr-4 pl-3 text-right text-xl font-medium whitespace-nowrap sm:pr-0">
                      Rp1.500.000
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div className="mt-10 text-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-medium">
                  Payment details
                </div>
                <div className="mt-2.5">
                  <span>Bank: BCA</span>
                  <ul className="text-sm">
                    <li>
                      Account: 1234567890
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-medium">Note</div>
                <div className="mt-2.5">
                  Thank you for your business!
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
