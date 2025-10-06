-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('Bungalow', 'Apartment', 'House', 'Studio', 'Cottage', 'Villa', 'Other');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MANAGER', 'LANDLORD', 'TENANT');

-- CreateEnum
CREATE TYPE "PropertyStatus" AS ENUM ('PENDING_VERIFICATION', 'ACTIVE', 'INACTIVE', 'RENTED');

-- CreateEnum
CREATE TYPE "MaintenanceStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'RESOLVED');

-- CreateEnum
CREATE TYPE "DisputePriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "DisputeStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED');

-- CreateTable
CREATE TABLE "Dispute" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "property_id" UUID NOT NULL,
    "openedBy" UUID,
    "priority" "DisputePriority" NOT NULL DEFAULT 'MEDIUM',
    "status" "DisputeStatus" NOT NULL DEFAULT 'OPEN',
    "openedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dispute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phoneNo" VARCHAR(15) NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Properties" (
    "id" UUID NOT NULL,
    "landlord_id" UUID,
    "createdBy" UUID,
    "propertyType" "PropertyType",
    "area" DECIMAL(10,2),
    "isAvailable" BOOLEAN DEFAULT true,
    "availableFrom" DATE,
    "status" "PropertyStatus" DEFAULT 'PENDING_VERIFICATION',
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyCertificates" (
    "id" UUID NOT NULL,
    "property_id" UUID,
    "certificateName" VARCHAR(100),
    "documentURL" TEXT,
    "uploadedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyCertificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantVerifications" (
    "id" UUID NOT NULL,
    "tenant_id" UUID,
    "verificationDate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenantVerifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leases" (
    "id" UUID NOT NULL,
    "tenant_id" UUID,
    "property_id" UUID,
    "landlord_id" UUID,
    "startDate" DATE,
    "endDate" DATE,
    "monthlyRent" DECIMAL(10,2),
    "depositAmount" DECIMAL(10,2),
    "signedAgreementURL" TEXT,
    "status" VARCHAR(20) DEFAULT 'ACTIVE',

    CONSTRAINT "Leases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" UUID NOT NULL,
    "tenant_id" UUID,
    "landlord_id" UUID,
    "property_id" UUID,
    "amount" DECIMAL(10,2),
    "paymentDate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "paymentStatus" VARCHAR(20) DEFAULT 'PAID',
    "paymentMethod" VARCHAR(50),

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyManagers" (
    "id" UUID NOT NULL,
    "manager_id" UUID,
    "property_id" UUID,
    "assignedBy" UUID,
    "assignedDate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyManagers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyReviews" (
    "id" UUID NOT NULL,
    "property_id" UUID,
    "tenant_id" UUID,
    "rating" INTEGER,
    "review" TEXT,
    "reviewDate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyReviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "message" TEXT,
    "isRead" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceRequests" (
    "id" UUID NOT NULL,
    "property_id" UUID,
    "tenant_id" UUID,
    "requestDetails" TEXT,
    "status" "MaintenanceStatus" DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MaintenanceRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduledVisits" (
    "id" UUID NOT NULL,
    "property_id" UUID,
    "visitor_id" UUID,
    "scheduledDate" TIMESTAMP(6),
    "status" VARCHAR(20) DEFAULT 'PENDING',

    CONSTRAINT "ScheduledVisits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedProperties" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "property_id" UUID,
    "savedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "documentType" VARCHAR(50),
    "documentURL" TEXT,
    "uploadedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" UUID NOT NULL,
    "payment_id" UUID,
    "transactionType" VARCHAR(50) DEFAULT 'RENT',
    "amount" DECIMAL(10,2),
    "transactionDate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" UUID NOT NULL,
    "sender_id" UUID,
    "receiver_id" UUID,
    "message" TEXT,
    "sentAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "isRead" BOOLEAN DEFAULT false,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActivityLogs" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "action" VARCHAR(100),
    "timestamp" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserActivityLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyImages" (
    "id" UUID NOT NULL,
    "property_id" UUID,
    "imageURL" TEXT,
    "uploadedAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phoneNo_key" ON "Users"("phoneNo");

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyCertificates" ADD CONSTRAINT "PropertyCertificates_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TenantVerifications" ADD CONSTRAINT "TenantVerifications_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Leases" ADD CONSTRAINT "Leases_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Leases" ADD CONSTRAINT "Leases_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Leases" ADD CONSTRAINT "Leases_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyManagers" ADD CONSTRAINT "PropertyManagers_assignedBy_fkey" FOREIGN KEY ("assignedBy") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyManagers" ADD CONSTRAINT "PropertyManagers_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyManagers" ADD CONSTRAINT "PropertyManagers_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyReviews" ADD CONSTRAINT "PropertyReviews_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyReviews" ADD CONSTRAINT "PropertyReviews_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MaintenanceRequests" ADD CONSTRAINT "MaintenanceRequests_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MaintenanceRequests" ADD CONSTRAINT "MaintenanceRequests_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ScheduledVisits" ADD CONSTRAINT "ScheduledVisits_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ScheduledVisits" ADD CONSTRAINT "ScheduledVisits_visitor_id_fkey" FOREIGN KEY ("visitor_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SavedProperties" ADD CONSTRAINT "SavedProperties_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SavedProperties" ADD CONSTRAINT "SavedProperties_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserActivityLogs" ADD CONSTRAINT "UserActivityLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyImages" ADD CONSTRAINT "PropertyImages_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
