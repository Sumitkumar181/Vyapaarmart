import car from '../../assets/card/car.webp';
import laptop from '../../assets/card/laptop.webp'
import phone from '../../assets/card/phone.webp'
import pepidies from '../../assets/card/pepidies.webp'




const products = [
    {
        title: "PS5, PS5 Slim, PS5 Pro Playstation...",
        price: "US$ 210.00",
        moq: "1 Unit (MOQ)",
        image: car,
    },
    {
        title: "Luxury designer men's watches...",
        price: "US$ 9.99",
        moq: "10 Pieces (MOQ)",
        image: laptop,
    },
    {
        title: "Polaris Vaydor G35 Slingshot...",
        price: "US$ 2600.00",
        moq: "1 Unit (MOQ)",
        image: phone,
    },
    {
        title: "Refurbished used laptops at bulk...",
        price: "US$ 150.00",
        moq: "2 Pieces (MOQ)",
        image: pepidies,
    },
];

const MostPopular = () => {
    return (
        <div className="w-full sm:w-64 bg-white font-roboto p-4 rounded shadow text-sm">
            <div className="flex justify-between items-center">
                <h2 className="text-black font-roboto font-bold text-base">Most popular</h2>
                <p className="text-black">See All</p>
            </div>
            <div className=" mt-6 flex flex-col gap-2">
                {products.map((item, index) => (
                    <div key={index} className="flex text-left gap-3 h-24">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-1/3 object-contain rounded-sm"
                        />
                        <div className="flex flex-col justify-evenly">
                            <p className="text-sm font-roboto text-gray">{item.title}</p>
                            <p className="text-black text-base font-bold">{item.price}</p>
                            <p className="text-black text-xs">{item.moq}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MostPopular;
