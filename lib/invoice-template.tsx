import React from "react";
import {Document, Font, Page, StyleSheet, Text, View} from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dthjQ.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc69thjQ.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcB9xhjQ.ttf",
      fontWeight: 600,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcPtxhjQ.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 32,
    backgroundColor: "#f9fafb",
    color: "#111827",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 1.5,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 32,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
    gap: 4,
  },
  heading: {
    fontSize: 20,
    fontWeight: 700,
    color: "#111827",
    letterSpacing: 0.5,
  },
  subheading: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    color: "#6b7280",
  },
  label: {
    fontSize: 9,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#9ca3af",
    letterSpacing: 0.4,
  },
  value: {
    fontSize: 10,
    color: "#111827",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 16,
  },
  itemsHeader: {
    flexDirection: "row",
    backgroundColor: "#111827",
    color: "#f9fafb",
    borderRadius: 8,
    padding: 12,
  },
  itemsHeaderCell: {
    fontWeight: 600,
  },
  itemsRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  itemsCell: {
    fontSize: 10,
    color: "#111827",
  },
  totals: {
    alignSelf: "flex-end",
    width: "50%",
    gap: 8,
    marginTop: 12,
  },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalsLabel: {
    fontSize: 10,
    color: "#6b7280",
  },
  totalsValue: {
    fontSize: 10,
    fontWeight: 600,
    color: "#111827",
  },
  grandTotal: {
    fontSize: 12,
    fontWeight: 700,
    color: "#111827",
  },
  notes: {
    gap: 6,
    marginTop: 16,
  },
  muted: {
    color: "#6b7280",
  },
});

const invoice = {
  number: "INV-1042",
  issueDate: "Apr 04, 2024",
  dueDate: "Apr 18, 2024",
  company: {
    name: "Invoiceku Studio",
    address: "987 Market Street, Suite 400\nSan Francisco, CA 94103",
    email: "billing@invoiceku.app",
    phone: "+1 (415) 555-9283",
  },
  client: {
    name: "Luminous Media Co.",
    contact: "Attn: Sarah Chen",
    address: "221 Harbor Way\nSeattle, WA 98121",
    email: "accounts@luminous.media",
  },
  items: [
    {
      description: "UX research sprint",
      quantity: 1,
      unitPrice: 1800,
    },
    {
      description: "Design system refresh",
      quantity: 18,
      unitPrice: 95,
    },
    {
      description: "Responsive marketing pages",
      quantity: 3,
      unitPrice: 420,
    },
  ],
  notes:
    "Thanks for choosing Invoiceku. Wire transfers settle within two business days.",
  terms: "Payment due within 14 days. Late invoices accrue a 3% monthly fee.",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

const itemsTotal = invoice.items.reduce(
  (total, item) => total + item.quantity * item.unitPrice,
  0,
);
const taxRate = 0.0825;
const taxAmount = itemsTotal * taxRate;
const totalDue = itemsTotal + taxAmount;

export const InvoiceTemplate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.subheading}>Invoice</Text>
            <Text style={styles.heading}>{invoice.number}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Issued</Text>
            <Text style={styles.value}>{invoice.issueDate}</Text>
            <Text style={[styles.label, {marginTop: 8}]}>Due</Text>
            <Text style={styles.value}>{invoice.dueDate}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={{width: "48%", gap: 8}}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>{invoice.company.name}</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.company.address}</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.company.email}</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.company.phone}</Text>
          </View>
          <View style={{width: "48%", gap: 8}}>
            <Text style={styles.label}>Bill to</Text>
            <Text style={styles.value}>{invoice.client.name}</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.client.contact}</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.client.address}</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.client.email}</Text>
          </View>
        </View>

        <View style={styles.itemsHeader}>
          <View style={{width: "50%"}}>
            <Text style={styles.itemsHeaderCell}>Description</Text>
          </View>
          <View style={{width: "15%", textAlign: "right"}}>
            <Text style={styles.itemsHeaderCell}>Qty</Text>
          </View>
          <View style={{width: "20%", textAlign: "right"}}>
            <Text style={styles.itemsHeaderCell}>Unit Price</Text>
          </View>
          <View style={{width: "15%", textAlign: "right"}}>
            <Text style={styles.itemsHeaderCell}>Amount</Text>
          </View>
        </View>

        {invoice.items.map((item) => {
          const amount = item.quantity * item.unitPrice;
          return (
            <View key={item.description} style={styles.itemsRow}>
              <View style={{width: "50%"}}>
                <Text style={styles.itemsCell}>{item.description}</Text>
              </View>
              <View style={{width: "15%", textAlign: "right"}}>
                <Text style={styles.itemsCell}>{item.quantity}</Text>
              </View>
              <View style={{width: "20%", textAlign: "right"}}>
                <Text style={styles.itemsCell}>{formatCurrency(item.unitPrice)}</Text>
              </View>
              <View style={{width: "15%", textAlign: "right"}}>
                <Text style={styles.itemsCell}>{formatCurrency(amount)}</Text>
              </View>
            </View>
          );
        })}

        <View style={styles.totals}>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Subtotal</Text>
            <Text style={styles.totalsValue}>{formatCurrency(itemsTotal)}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Tax ({(taxRate * 100).toFixed(2)}%)</Text>
            <Text style={styles.totalsValue}>{formatCurrency(taxAmount)}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.grandTotal}>Total Due</Text>
            <Text style={styles.grandTotal}>{formatCurrency(totalDue)}</Text>
          </View>
        </View>

        <View style={styles.notes}>
          <View style={styles.column}>
            <Text style={styles.label}>Notes</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.notes}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Terms</Text>
            <Text style={[styles.value, styles.muted]}>{invoice.terms}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
