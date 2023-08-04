import Marquee from "./Marquee"

export default function LogoCloud() {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Trusted by the best
                    </h3>
                    <p className="text-gray-600 mt-3">
                        See how our app is used by top chefs, food bloggers, and home cooks around the world.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <Marquee />
                </div>
            </div>
        </div>
    )
}