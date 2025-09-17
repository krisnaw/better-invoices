import React from "react";
import {Document, Page, StyleSheet, Text, View} from "@react-pdf/renderer";

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  price: number;
}

export interface PartyDetails {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  vat?: string;
}

export interface PaymentDetails {
  bank: string;
  account: string;
}

export interface InvoicePdfPayload {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  from: PartyDetails;
  to: PartyDetails;
  items: InvoiceLineItem[];
  paymentDetails: PaymentDetails;
  note: string;
}

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

const formatCurrency = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

const formatDate = (value: string) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("id-ID", {year: "numeric", month: "2-digit", day: "2-digit"});
};

export function InvoicePdfDocument({data}: {data: InvoicePdfPayload}) {
  const total = data.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.heading}>
          <Text>Invoice</Text>
        </View>

        <View style={pdfStyles.section}>
          <View style={pdfStyles.row}>
            <Text>Invoice #: {data.invoiceNumber}</Text>
            <Text>Issue date: {formatDate(data.issueDate)}</Text>
          </View>
          <View style={pdfStyles.row}>
            <Text>Due date: {formatDate(data.dueDate)}</Text>
          </View>
        </View>

        <View style={[pdfStyles.section, pdfStyles.twoColumn]}>
          <View style={pdfStyles.column}>
            <Text>From</Text>
            <Text>{data.from.name}</Text>
            {data.from.email ? <Text>{data.from.email}</Text> : null}
            {data.from.phone ? <Text>{data.from.phone}</Text> : null}
            {data.from.address ? <Text>{data.from.address}</Text> : null}
            {data.from.vat ? <Text>VAT: {data.from.vat}</Text> : null}
          </View>
          <View style={pdfStyles.column}>
            <Text>To</Text>
            <Text>{data.to.name}</Text>
            {data.to.email ? <Text>{data.to.email}</Text> : null}
            {data.to.phone ? <Text>{data.to.phone}</Text> : null}
            {data.to.address ? <Text>{data.to.address}</Text> : null}
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

          {data.items.map((item) => (
            <View key={item.description} style={pdfStyles.tableRow}>
              <Text style={pdfStyles.cellDescription}>{item.description}</Text>
              <Text style={pdfStyles.cellQuantity}>{item.quantity}</Text>
              <Text style={pdfStyles.cellPrice} wrap={false}>
                {formatCurrency(item.price)}
              </Text>
              <Text style={pdfStyles.cellTotal} wrap={false}>
                {formatCurrency(item.price * item.quantity)}
              </Text>
            </View>
          ))}

          <View style={[pdfStyles.tableRow, pdfStyles.totalRow]}>
            <Text style={pdfStyles.cellDescription}>Total</Text>
            <Text style={pdfStyles.cellQuantity}></Text>
            <Text style={pdfStyles.cellPrice}></Text>
            <Text style={pdfStyles.cellTotal} wrap={false}>
              {formatCurrency(total)}
            </Text>
          </View>
        </View>

        <View>
          <Text>Payment details: {data.paymentDetails.bank}, Account {data.paymentDetails.account}</Text>
          {data.note ? <Text>Note: {data.note}</Text> : null}
        </View>
      </Page>
    </Document>
  );
}
