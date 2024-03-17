-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pathimage" TEXT NOT NULL,
    "name" TEXT
);
INSERT INTO "new_client" ("id", "name", "pathimage") SELECT "id", "name", "pathimage" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
