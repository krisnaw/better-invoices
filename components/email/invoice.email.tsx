import * as React from 'react';
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const InvoiceEmail = (props: any) => {
  const {
    customerName = "John Andersson",
    orderNumber = "ORD-2024-001234",
    orderDate = "September 29, 2024",
    items = [
      { name: "Minimalist Oak Dining Table", quantity: 1, price: 899.00 },
      { name: "Scandinavian Pendant Light", quantity: 2, price: 149.00 },
      { name: "Wool Throw Blanket - Grey", quantity: 1, price: 79.00 }
    ],
    subtotal = 1276.00,
    tax = 127.60,
    shipping = 25.00,
    total = 1428.60,
    downloadUrl = "#"
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Invoice confirmation for order {orderNumber}</Preview>
        <Body className="bg-[#f8f9fa] font-sans py-[40px]">
          <Container className="bg-white max-w-[600px] mx-auto px-[40px] py-[48px]">
            {/* Header */}
            <Section className="mb-[48px]">
              <Heading className="text-[28px] font-light text-[#2c3e50] m-0 mb-[8px]">
                Invoice Confirmation
              </Heading>
              <Text className="text-[16px] text-[#7f8c8d] m-0">
                Thank you for your purchase, {customerName}
              </Text>
            </Section>

            {/* Order Details */}
            <Section className="mb-[40px]">
              <Row>
                <Column>
                  <Text className="text-[14px] text-[#95a5a6] m-0 mb-[4px] uppercase tracking-[1px]">
                    Order Number
                  </Text>
                  <Text className="text-[16px] text-[#2c3e50] m-0 font-medium">
                    {orderNumber}
                  </Text>
                </Column>
                <Column>
                  <Text className="text-[14px] text-[#95a5a6] m-0 mb-[4px] uppercase tracking-[1px]">
                    Order Date
                  </Text>
                  <Text className="text-[16px] text-[#2c3e50] m-0 font-medium">
                    {orderDate}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr className="border-[#ecf0f1] border-solid my-[32px]" />

            {/* Itemized Breakdown */}
            <Section className="mb-[40px]">
              <Heading className="text-[20px] font-light text-[#2c3e50] m-0 mb-[24px]">
                Order Summary
              </Heading>

              {items.map((item: any, index: any) => (
                <Row key={index} className="mb-[16px]">
                  <Column className="w-[60%]">
                    <Text className="text-[16px] text-[#2c3e50] m-0">
                      {item.name}
                    </Text>
                    <Text className="text-[14px] text-[#7f8c8d] m-0">
                      Qty: {item.quantity}
                    </Text>
                  </Column>
                  <Column className="w-[40%] text-right">
                    <Text className="text-[16px] text-[#2c3e50] m-0 font-medium">
                      ${item.price.toFixed(2)}
                    </Text>
                  </Column>
                </Row>
              ))}

              <Hr className="border-[#ecf0f1] border-solid my-[24px]" />

              {/* Totals */}
              <Row className="mb-[8px]">
                <Column className="w-[60%]">
                  <Text className="text-[16px] text-[#7f8c8d] m-0">Subtotal</Text>
                </Column>
                <Column className="w-[40%] text-right">
                  <Text className="text-[16px] text-[#7f8c8d] m-0">${subtotal.toFixed(2)}</Text>
                </Column>
              </Row>

              <Row className="mb-[8px]">
                <Column className="w-[60%]">
                  <Text className="text-[16px] text-[#7f8c8d] m-0">Tax</Text>
                </Column>
                <Column className="w-[40%] text-right">
                  <Text className="text-[16px] text-[#7f8c8d] m-0">${tax.toFixed(2)}</Text>
                </Column>
              </Row>

              <Row className="mb-[16px]">
                <Column className="w-[60%]">
                  <Text className="text-[16px] text-[#7f8c8d] m-0">Shipping</Text>
                </Column>
                <Column className="w-[40%] text-right">
                  <Text className="text-[16px] text-[#7f8c8d] m-0">${shipping.toFixed(2)}</Text>
                </Column>
              </Row>

              <Hr className="border-[#34495e] border-solid my-[16px]" />

              <Row>
                <Column className="w-[60%]">
                  <Text className="text-[20px] text-[#2c3e50] m-0 font-medium">Total</Text>
                </Column>
                <Column className="w-[40%] text-right">
                  <Text className="text-[20px] text-[#2c3e50] m-0 font-medium">${total.toFixed(2)}</Text>
                </Column>
              </Row>
            </Section>

            {/* Download Button */}
            <Section className="text-center mb-[40px]">
              <Button
                href={downloadUrl}
                className="bg-[#2c3e50] text-white px-[32px] py-[16px] text-[16px] font-medium no-underline rounded-[4px] box-border"
              >
                Download Invoice
              </Button>
            </Section>

            <Hr className="border-[#ecf0f1] border-solid my-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[14px] text-[#95a5a6] m-0 mb-[8px]">
                Questions about your order? Contact us at{' '}
                <Link href="mailto:support@krisnawijaya.com" className="text-[#2c3e50] no-underline">
                  support@krisnawijaya.com
                </Link>
              </Text>

              <Text className="text-[12px] text-[#bdc3c7] m-0 mt-[24px]">
                Nordic Design Studio
              </Text>
              <Text className="text-[12px] text-[#bdc3c7] m-0">
                Storgatan 15, 111 51 Stockholm, Sweden
              </Text>
              <Text className="text-[12px] text-[#bdc3c7] m-0 mt-[16px]">
                © 2024 Nordic Design Studio. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InvoiceEmail.PreviewProps = {
  customerName: "John Andersson",
  orderNumber: "ORD-2024-001234",
  orderDate: "September 29, 2024",
  items: [
    { name: "Minimalist Oak Dining Table", quantity: 1, price: 899.00 },
    { name: "Scandinavian Pendant Light", quantity: 2, price: 149.00 },
    { name: "Wool Throw Blanket - Grey", quantity: 1, price: 79.00 }
  ],
  subtotal: 1276.00,
  tax: 127.60,
  shipping: 25.00,
  total: 1428.60,
  downloadUrl: "https://example.com/download-invoice"
};

export default InvoiceEmail;