ALTER TABLE "invoices" ADD COLUMN "status" varchar(255) DEFAULT 'draft' NOT NULL;--> statement-breakpoint
ALTER TABLE "invoices" ADD COLUMN "currency" varchar(255) DEFAULT 'IDR' NOT NULL;