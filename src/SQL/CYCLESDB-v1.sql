CREATE TYPE "CycleState" AS ENUM (
  'CURRENT',
  'READY',
  'TO_FILL',
  'WATCHED'
);

CREATE TYPE "FilmState" AS ENUM (
  'TO_KEEP',
  'TO_DELETE',
  'TO_WATCH',
  'WATCHED'
);

CREATE TYPE "SortType" AS ENUM (
  'RELEASE_YEAR',
  'SPECIAL_INFO',
  'TITLE',
  'LENGTH'
);

CREATE TABLE "Cycle" (
  "cycleName" varchar,
  "filmId" integer,
  "filmSeen" boolean,
  PRIMARY KEY ("filmId", "cycleName")
);

CREATE TABLE "CycleDescription" (
  "name" varchar PRIMARY KEY,
  "description" varchar,
  "state" "CycleState",
  "defaultSortType" "SortType"
);

CREATE TABLE "Film" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "year" integer,
  "length" integer,
  "specialInfo" varchar,
  "filmPath" varchar,
  "subsPath" varchar,
  "filmState" "FilmState"
  UNIQUE ("title", "year", "length")
);

ALTER TABLE "Cycle" ADD CONSTRAINT "CyclesDesc_Cycle" FOREIGN KEY ("cycleName") REFERENCES "CycleDescription" ("name");

ALTER TABLE "Cycle" ADD CONSTRAINT "Films_Cycle" FOREIGN KEY ("filmId") REFERENCES "Film" ("id");
