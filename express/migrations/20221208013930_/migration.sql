-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "project" (
    "project_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL DEFAULT '',
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "deadline" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("project_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_username_fkey" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
