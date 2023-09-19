export default function NavBar() {
    return (
        <nav className="flex sticky w-full bg-transparent p-5 navText">
            <div className="flex w-full border-b-2 p-5">
                <div className="font-bold items-center pl-5">
                    <h1 className="text-5xl">Restaurant</h1>
                </div>
                <div className=" flex w-full justify-end font-bold items-center pr-5">
                    <ul className="flex flex-row gap-5">
                        <a href="/"><li className="text-2xl">Home</li></a>
                        <a href="/about"><li className="text-2xl">Menu</li></a>
                        <a href="/reservation"><li className="text-2xl">Reservation</li></a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

