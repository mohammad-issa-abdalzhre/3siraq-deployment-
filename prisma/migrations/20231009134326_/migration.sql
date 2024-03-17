-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_prodect" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pathimage" TEXT NOT NULL,
    "name" TEXT,
    "decription" TEXT,
    "id_catogary" TEXT NOT NULL
);
INSERT INTO "new_prodect" ("decription", "id", "id_catogary", "name", "pathimage") SELECT "decription", "id", "id_catogary", "name", "pathimage" FROM "prodect";
DROP TABLE "prodect";
ALTER TABLE "new_prodect" RENAME TO "prodect";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
