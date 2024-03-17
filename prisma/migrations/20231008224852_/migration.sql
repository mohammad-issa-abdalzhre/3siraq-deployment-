/*
  Warnings:

  - Made the column `pathimage` on table `prind` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_prind" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pathimage" TEXT NOT NULL
);
INSERT INTO "new_prind" ("id", "pathimage") SELECT "id", "pathimage" FROM "prind";
DROP TABLE "prind";
ALTER TABLE "new_prind" RENAME TO "prind";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
