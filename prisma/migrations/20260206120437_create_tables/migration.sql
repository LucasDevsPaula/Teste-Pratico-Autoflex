-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rawMaterials" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stockyQuantity" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rawMaterials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productsRawMaterials" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "rawMaterial_id" TEXT NOT NULL,
    "requiredQuantity" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "productsRawMaterials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_code_key" ON "products"("code");

-- CreateIndex
CREATE UNIQUE INDEX "rawMaterials_code_key" ON "rawMaterials"("code");

-- CreateIndex
CREATE UNIQUE INDEX "productsRawMaterials_product_id_rawMaterial_id_key" ON "productsRawMaterials"("product_id", "rawMaterial_id");

-- AddForeignKey
ALTER TABLE "productsRawMaterials" ADD CONSTRAINT "productsRawMaterials_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productsRawMaterials" ADD CONSTRAINT "productsRawMaterials_rawMaterial_id_fkey" FOREIGN KEY ("rawMaterial_id") REFERENCES "rawMaterials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
