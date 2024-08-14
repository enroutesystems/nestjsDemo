-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "severity" INTEGER,
    "priority" INTEGER,
    "type" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TicketType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_title_key" ON "Ticket"("title");

-- CreateIndex
CREATE UNIQUE INDEX "TicketType_name_key" ON "TicketType"("name");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_type_fkey" FOREIGN KEY ("type") REFERENCES "TicketType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
