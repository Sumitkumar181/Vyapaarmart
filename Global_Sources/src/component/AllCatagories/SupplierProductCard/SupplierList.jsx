import ProductCard from "./ProductCard";

export default function ProductsList() {
    return (
        <div className="p-6 grid gap-6">
            <ProductCard
                image="https://via.placeholder.com/200x200"
                title="Led Logo Projection Light 600W - Color: Black"
                price="260000 INR/Piece"
                moq="1 Piece/Pieces"
                color="Black"
                lightColor="Black"
                productType="Logo"
                material="Aluminum"
                inputVoltage="600 Watt (W)"
                weight="20 Kilograms (kg)"
                sellerName="Hesham Industrial Solutions"
                sellerLocation="Vadodara"
                businessType="Manufacturer | Distributor"
                established="2016"
                badges={[
                    { label: "Trusted Seller", color: "bg-green-100 text-green-700" },
                    { label: "Super Seller", color: "bg-blue-100 text-blue-700" },
                ]}
                years={7}
            />
        </div>
    );
}
