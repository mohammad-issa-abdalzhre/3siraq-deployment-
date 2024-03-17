/*
  Warnings:

  - Added the required column `name` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pathimage" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_client" ("id", "pathimage") SELECT "id", "pathimage" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
