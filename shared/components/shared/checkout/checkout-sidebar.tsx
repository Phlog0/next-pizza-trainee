"use client";
import { useCartStore } from "@/shared/store";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { WhiteBlock } from "../white-block";
import { CheckoutDetailsItem } from "./checkout-details-item";
import { Button, Skeleton } from "../../ui";
import { calcTotalAmountWithPercentages, deliveryPrice } from "@/lib";
export function CheckoutSidebar({ submitting }: { submitting: boolean }) {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const loading = useCartStore((state) => state.loading);
  const { taxesPrice, totalAmountWithPercentages } =
    calcTotalAmountWithPercentages(totalAmount);
  return (
    <>
      {/* {totalAmount ? ( */}
      <div className="bg-red-400 max-w-xl flex-1">
        <WhiteBlock className="p-6 sticky top-4">
          {loading ? (
            <Skeleton className="w-83 h-18" />
          ) : (
            <div className="flex flex-col gap-4">
              <span className="text-xs">Итого</span>
              <span className="font-extrabold text-4xl">
                {totalAmountWithPercentages} ₽
              </span>
            </div>
          )}
          <CheckoutDetailsItem
            className="items-center"
            price={totalAmount}
            title={
              <div className="flex gap-2 ">
                <Package className=" text-gray-300" />
                Стоимость товара
              </div>
            }
          />
          <CheckoutDetailsItem
            price={Number(taxesPrice)}
            title={
              <div className="flex gap-2 ">
                <Percent className=" text-gray-300" />
                Налоги
              </div>
            }
          />
          <CheckoutDetailsItem
            price={deliveryPrice}
            title={
              <div className="flex gap-2 ">
                <Truck className=" text-gray-300" />
                Доставка товара
              </div>
            }
          />
          <Button
            variant={loading || submitting ? "loading" : "default"}
            type="submit"
            className="w-full py-10 text-2xl mt-10"
          >
            Перейти к оплате <ArrowRight />
          </Button>
        </WhiteBlock>
      </div>
      {/* ) : (
        <Skeleton className="max-w-xl flex-1" />
      )} */}
    </>
  );
}
