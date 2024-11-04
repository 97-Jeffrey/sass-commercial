import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageWithBlackButton } from "../../_components/PageWithBlackButton";
import { ProductDetailsForm } from "../../_components/forms/ProductDetailsForm";

export  default function NewProductPage(){
    return (
    <PageWithBlackButton 
        pageTitle="New Product" 
        backButtonRef="/dashboard/products"
    >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductDetailsForm />
          </CardContent>
        </Card>
    </PageWithBlackButton>)
}