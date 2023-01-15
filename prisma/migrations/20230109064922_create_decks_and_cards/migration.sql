-- CreateTable
CREATE TABLE "FlashCardDeck" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL DEFAULT '',
    "description" VARCHAR(4000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlashCardDeck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlashCard" (
    "id" SERIAL NOT NULL,
    "flashCardDeckId" INTEGER NOT NULL,
    "hiddenUntil" TIMESTAMP(3),
    "front" VARCHAR(4000) NOT NULL DEFAULT '',
    "back" VARCHAR(4000) NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlashCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlashCard" ADD CONSTRAINT "FlashCard_flashCardDeckId_fkey" FOREIGN KEY ("flashCardDeckId") REFERENCES "FlashCardDeck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
